import { SendMailDto } from "../../domain/dtos/send-mail-dto";
import { IMailerRepository } from "../../domain/repositories/mailer-repository";

export class InMemoryMailerRepository implements IMailerRepository {
  emails = [];
  async sendMail(mail: SendMailDto): Promise<void> {
    this.emails.push(mail);
  }
}
