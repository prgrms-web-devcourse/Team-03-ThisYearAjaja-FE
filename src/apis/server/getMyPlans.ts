import { DOMAIN } from '@/constants/api';
import { GetMyPlansResponse } from '@/types/apis/plan/GetMyPlans';
import { axiosInstanceServer } from '@apis/axiosInstanceServer';

export const getMyPlans = async () => {
  const { data } = await axiosInstanceServer.get<GetMyPlansResponse>(
    DOMAIN.GET_PLANS_MAIN,
  );
  return data;
};
