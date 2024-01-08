export const validateEmail = (stringEmail) =>
// Hàm kiểm tra định dạng của địa chỉ email
// Sử dụng phương thức test() để kiểm tra xem chuỗi có phù hợp với biểu thức chính quy hay không
{ return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(stringEmail) } 

export const validatePassword = (stringPassword) =>
{
  return stringPassword.length >= 6
}