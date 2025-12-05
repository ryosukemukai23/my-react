import React from "react";
import {useForm, Controller} from "react-hook-form";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextField,
  Radio,
  RadioGroup,
  FormLabel,
  Box,
} from "@mui/material";

export default function FormBasic() {
  const defaultValues = {
    name: "山田太郎",
    email: "Oj2Tt@example.com",
    gender: "male",
    memo: "",
  };

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
    /*************  ✨ Windsurf Command ⭐  *************/
    /**
     * onsubmit - Submit form data and log to console after 4 seconds
     * @param {Object} data - Form data
     * @return {Promise} - Promise that resolves with form data after 4 seconds
     */
    /*******  22edf86b-a630-4004-92f5-27828870c9ca  *******/
  } = useForm({defaultValues, mode: "onBlur"});

  const onSubmit = (data) => {
    console.log("送信データ:", data);
  };

  const onError = (errors) => {
    console.log("バリデーションエラー:", errors);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit, onError)} noValidate sx={{maxWidth: 400, mx: "auto", mt: 4}}>
      {/* 名前 */}
      <TextField
        label="名前"
        margin="normal"
        fullWidth
        {...register("name", {
          required: "名前は必須入力です",
          maxLength: {value: 20, message: "20文字以内で入力してください"},
        })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      {/* メール */}
      <TextField
        label="メール"
        type="email"
        margin="normal"
        fullWidth
        {...register("email", {
          required: "メールは必須入力です",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "有効なメールアドレスを入力してください",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      {/* 性別 */}
      <FormControl margin="normal" component="fieldset" error={!!errors.gender}>
        <FormLabel component="legend">性別</FormLabel>
        <Controller
          name="gender"
          control={control}
          rules={{required: "性別は必須選択です"}}
          render={({field}) => (
            <RadioGroup row {...field}>
              <FormControlLabel value="male" control={<Radio />} label="男性" />
              <FormControlLabel value="female" control={<Radio />} label="女性" />
            </RadioGroup>
          )}
        />
        <FormHelperText>{errors.gender?.message}</FormHelperText>
      </FormControl>

      {/* メモ */}
      <TextField
        label="メモ"
        multiline
        rows={4}
        margin="normal"
        fullWidth
        {...register("memo", {
          required: "メモは必須入力です",
          maxLength: {value: 10, message: "10文字以内で入力してください"},
        })}
        error={!!errors.memo}
        helperText={errors.memo?.message}
      />

      {/* 送信ボタン */}
      <Button type="submit" variant="contained" color="primary" sx={{mt: 2}} fullWidth>
        送信
      </Button>
    </Box>
  );
}
