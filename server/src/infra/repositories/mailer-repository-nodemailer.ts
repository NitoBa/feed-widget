import { SendMailDto } from "../../domain/dtos/send-mail-dto";
import { IMailerRepository } from "../../domain/repositories/mailer-repository";
import { NodeMailer } from "../../external/nodemailer-config";

export class MailerRepositoryNodeMailer implements IMailerRepository {
  constructor(private nodeMailer: NodeMailer) {}

  async sendMail({ subject, message }: SendMailDto): Promise<void> {
    await this.nodeMailer.client.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Bruno Alves <nito.dev@gmail.com>",
      subject,
      html: typeof message === "string" ? message : message.join("\n"),
    });
  }
}
