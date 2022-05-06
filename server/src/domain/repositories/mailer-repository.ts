import { SendMailDto } from "../dtos/send-mail-dto";

export interface IMailerRepository {
  sendMail(mail: SendMailDto): Promise<void>;
}
