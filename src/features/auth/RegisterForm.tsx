import { Button, Form } from "semantic-ui-react";
import ModalWrapper from "../../app/common/modals/ModalWrapper";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/store/store";
import { closeModal } from "../../app/common/modals/modalSlice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../app/config/firebase";
import { signIn } from "./authSlice";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, isDirty, errors },
  } = useForm({ mode: "onTouched" });

  const dispatch = useAppDispatch();

  async function onSubmit(data: FieldValues) {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(userCreds.user, {
        displayName: data.displayName,
      });
      dispatch(signIn(userCreds.user));
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ModalWrapper header='Register at re-vents'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          defaultValue=''
          placeholder='Display name'
          {...register("displayName", { required: true })}
          error={errors.displayName && "Display name is required"}
        />
        <Form.Input
          defaultValue=''
          placeholder='Email address'
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          error={
            (errors.email?.type === "required" && "Email is required") ||
            (errors.email?.type === "pattern" && "Email is invalid")
          }
        />
        <Form.Input
          type='password'
          defaultValue=''
          placeholder='Password'
          {...register("password", { required: true })}
          error={errors.password && "Password is required"}
        />
        <Button
          loading={isSubmitting}
          disabled={!isValid || !isDirty || isSubmitting}
          type='submit'
          fluid
          size='large'
          color='teal'
          content='Register'
        />
      </Form>
    </ModalWrapper>
  );
}
