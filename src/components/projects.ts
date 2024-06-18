import agendar_demonstration from '/public/mockups/agendar-demonstration.png'
import tsnet_demonstration from '/public/mockups/tsnet-desmontration.png'

interface IProject {
  Title: string
  Description: string
  MockupUrl: string
  MockupBlurUrl: string | undefined
  LiveUrl: string
  GithubUrl: string
}

const baseGithubUrl = 'https://github.com/luis-lbs'

const agendar_descomplicado: IProject = {
  Title: 'Agendar Descomplicado',
  Description: 'Permita que seus clientes reservem um horário na sua agenda de forma rápida e dinâmica.',
  MockupUrl: agendar_demonstration.src,
  MockupBlurUrl: agendar_demonstration.blurDataURL,
  GithubUrl: `${baseGithubUrl}/AgendaR`,
  LiveUrl: '#'
}

const seo_adsense_blog: IProject = {
  Title: 'Blog com SEO e GoogleAdSense',
  Description: 'Um blog com as melhores ténicas de SEO e GoogleAdSense do mercado, veloz e com painel para adição de conteúdos. Monetize seu conhecimento com essa plataforma.',
  MockupUrl: tsnet_demonstration.src,
  MockupBlurUrl: tsnet_demonstration.blurDataURL,
  GithubUrl: `${baseGithubUrl}/TSNet-blog`,
  LiveUrl: 'https://tsnetservicosdetelecom.net.br/'
}

export const projects: IProject[] = [agendar_descomplicado, seo_adsense_blog]