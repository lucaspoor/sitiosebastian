import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export default function EmailComponent(cuerpo: any) {
  return (
    <Html>
      <Head />
      <Preview>Envio de Formulario pagina web de Sebastianalvarez.cl</Preview>
      <Body>
        <Container>
          <Text>
            <strong>Formulario Pagina web Sebastianalvarez.cl</strong>
          </Text>
          <Text>Datos personales de la persona:</Text>

          <Text>
            <strong>Nombre:</strong> <br></br>
            {cuerpo.nombre}
          </Text>
          <Text>
            <strong>Sector:</strong> <br></br>
            {cuerpo.sector}
          </Text>
          <Text>
            <strong>Correo de la persona:</strong> <br></br>
            {cuerpo.email}
          </Text>
          <Text>
            <strong>Mensaje:</strong>
            <br></br>
            {cuerpo.message}
          </Text>
          <Text>
            <strong>Numero de teléfono:</strong>
            <br></br>
            {cuerpo.numero}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
