import { useQuery } from '@tanstack/react-query';
import { InvitationsStore } from 'store/stores/employeeManagement/useInvitationsStore';

interface PropsData {
  salonId: string;
  category: string;
  // Add other fields as necessary
}

interface Designer {
  id: string;
  name: string;
  // Add other fields as necessary
}

const { inviteDesigner } = InvitationsStore();

const useDesignerData = () => {
  // @ts-ignore
  return useQuery(['designerData'], inviteDesigner);
};
// const useDesignerData = (): UseQueryResult<Designer[], Error> => {
//   return useQuery<Designer[], Error>(['designerData'], fetchDesigners);
// };

export default useDesignerData;
