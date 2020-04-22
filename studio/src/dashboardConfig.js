export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ea001d433ab7d6481cf8709',
                  title: 'Sanity Studio',
                  name: 'gatsby-blog-studio-8voz87f1',
                  apiId: '432eb127-ca2a-4639-8392-7867f38fc93d'
                },
                {
                  buildHookId: '5ea001d417e36c2036b3d32b',
                  title: 'Blog Website',
                  name: 'gatsby-blog-web-ihw9abhi',
                  apiId: '87e1da21-74e4-4f70-b068-6e4801fe6256'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariedevos/gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gatsby-blog-web-ihw9abhi.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
