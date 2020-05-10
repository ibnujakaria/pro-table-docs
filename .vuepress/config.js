module.exports = {
  title: 'Pro Table',
  description: 'A DataTable alternative. Written with modern javascript.',
  themeConfig: {
    searchPlaceholder: 'Search..',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/examples/' }
    ],
    sidebar: {
      '/guide/': [
        '',
        'getting-started'
      ]
    },
    repo: {
      link: 'https://github.com/ibnujakaria/pro-table',
      repoLabel: 'Github',
      editLinks: true,
      editLinkText: 'Improve this page'
    }
  }
}