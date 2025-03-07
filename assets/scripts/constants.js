const top_part = `import type { Strapi } from "@strapi/strapi";

export const create = async (strapi: Strapi): Promise<void> => {
   const name = ''

   if (!await strapi.query('api::document-map.document-map').findOne({
      where: {
         name: name,
      }
   })) {
      console.log(\`document-map > Creating \${name}\`)

      await strapi.entityService.create('api::document-map.document-map', {
         data: {
            name: name,
            language: 'EN',
            timeZone: 'America/New_York',
            version: 1,
            //width: // TODO:,
            //height: // TODO:,
            //barcode: // TODO:,
            // alignmentMarkers: [{
            //    a: { x: 0, y: 0, text: 'TODO' },
            //    b: { x: 0, y: 0, text: 'TODO' },
            // }],
            areas: [\n`


const bottom_part = `]
}
});
}
}`