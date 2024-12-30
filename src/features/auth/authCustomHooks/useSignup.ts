import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.auth.signup)["$post"]>;

type RequestType = InferRequestType<(typeof client.api.auth.signup)["$post"]>;

export const useSignup = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const res = await client.api.auth.signup["$post"]({ json });

      if (!res.ok) throw new Error("Sign up failed.");

      return await res.json();
    },
    onSuccess: () => {
      toast.success("Succesfully signed up.");
    },
    onError: () => {
      toast.error("Sign up failed.");
    },
  });

  return mutation;
};