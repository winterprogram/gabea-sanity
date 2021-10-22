export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6168921af328471f73185b29',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dfx85whu',
                  apiId: 'd98786db-6a4b-42fd-9772-7f412988af3d'
                },
                {
                  buildHookId: '6168921a8dcceb22cfd5dda0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uxqpjxd7',
                  apiId: 'dd3ed88d-e882-4265-b548-c5f50eeb19fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/smitray/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uxqpjxd7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
