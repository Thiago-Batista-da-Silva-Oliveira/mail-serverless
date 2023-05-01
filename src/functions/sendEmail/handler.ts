import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import {createTransport} from "nodemailer";
import { middyfy } from "@libs/lambda";

import schema from "./schema";

const emailHandler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
    let transporter = createTransport({
      host: event.body.host || "smtp.ethereal.email",
      port: event.body.port || 587,
      secure: event.body.secure || false, 
      auth: {
        user: event.body.user,
        pass: event.body.pass,
      },
    });
  
    // send mail with defined transport object
    await transporter.sendMail({
      from: event.body.from,
      to: event.body.to,
      subject: event.body.subject,
    });
  return formatJSONResponse({
    message: event.body.to,
  });
};

export const main = middyfy(emailHandler);
