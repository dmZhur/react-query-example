import Cookies from 'js-cookie';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiUsers } from '@/api';
import { useToast } from '@/components/ui';
import { User } from '@/types';

const createUserFn = async (newUser: User) => {
  const response = await apiUsers.post('/add', {
    firstName: newUser.name,
    password: newUser.password,
  });
  return response.data;
};

export function useCreateUser() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: createUserFn,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['users'] });
    },
    onSuccess: (data) => {
      Cookies.set('token', data.firstName, { expires: 1 });
      toast({
        title: 'New User Created',
        description: `Name: ${data.firstName}`,
      });
    },
  });
}
