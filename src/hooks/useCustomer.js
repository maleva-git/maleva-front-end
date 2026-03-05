import { useQuery } from "@tanstack/react-query";
import { customerApi } from "../features/customer/CustomerApi";

export const useCustomers = () => {
  return useQuery({
    queryKey: ["customer"],
    queryFn: () => customerApi.fetchAll(),
    enabled: true,
  });
};

export const useCustomer = useCustomers;
