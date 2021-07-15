'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

 module.exports = {
  lifecycles: {
      async  afterCreate(result, data) {

          await strapi.plugins['email'].services.email.send({
            to: 'saralesan@hotmail.com',
            subject: 'Has recibido un mensaje en Web Event Box',
            html: `<p>Un usuario a escrito en <b>Web Event Box</b></p>
            <ul><li>Nombre: ` + data.name + `</li>
            <li>Email: ` + data.email + `</li>
            <li>Teléfono: ` + data.phone + `</li>
            <li>Empresa: ` + data.company + `</li>
            <li>Mensaje: ` + data.comment + `</li></ul>`,
          });

      },
  },
};
