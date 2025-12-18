
import { AreaType, OrgArea, Committee } from './types';

export const COLORS = {
  primary: '#470082', // MetaRH Deep Purple
  secondary: '#441176', // Ops Adm (Updated)
  accent: '#9f04d4', // R&S
  support1: '#6404bc',
  support2: '#ff27f9',
  support3: '#9c5cf5', // Comercial (Updated)
  support4: '#c082ff',
  support5: '#c9f545', // Lime
  support6: '#fff24d', // Yellow
  background: '#fcfcfd',
  white: '#FFFFFF',
};

const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const MACRO_AREAS: OrgArea[] = [
  {
    id: 'ops-admin',
    name: 'Operações Administrativas',
    type: AreaType.MACRO,
    color: '#441176',
    description: LOREM_IPSUM
  },
  {
    id: 'rec-sel',
    name: 'Recrutamento e Seleção',
    type: AreaType.MACRO,
    color: COLORS.accent,
    description: LOREM_IPSUM
  },
  {
    id: 'comercial',
    name: 'Comercial',
    type: AreaType.MACRO,
    color: '#9c5cf5',
    description: LOREM_IPSUM
  }
];

export const STRATEGIC_AREAS: OrgArea[] = [
  { id: 'mkt', name: 'Marketing', type: AreaType.STRATEGIC, color: COLORS.support1, description: LOREM_IPSUM },
  { id: 'bi', name: 'Bussiness Intelligence', type: AreaType.STRATEGIC, color: COLORS.support2, description: LOREM_IPSUM },
  { id: 'gg', name: 'Gente e Gestão', type: AreaType.STRATEGIC, color: COLORS.support4, description: LOREM_IPSUM },
  { id: 'fin', name: 'Financeiro', type: AreaType.STRATEGIC, color: COLORS.support5, description: LOREM_IPSUM },
  { id: 'jur', name: 'Jurídico', type: AreaType.STRATEGIC, color: COLORS.support6, description: LOREM_IPSUM },
  { id: 'comp', name: 'Compliance', type: AreaType.STRATEGIC, color: COLORS.primary, description: LOREM_IPSUM }
];

export const COMMITTEES: Committee[] = [
  { 
    id: 'c-cobranca', 
    name: 'Comitê de Cobrança', 
    description: 'Responsável por organizar, supervisionar e implementar estratégias para a recuperação de valores devidos por clientes ou parceiros comerciais.' 
  },
  { 
    id: 'c-riscos', 
    name: 'Gerenciamento de Riscos', 
    description: 'Responsável por identificar, avaliar, monitorar e mitigar os riscos que podem afetar uma organização.' 
  },
  { 
    id: 'c-lgpd', 
    name: 'Comitê LGPD', 
    description: 'Garante que a organização esteja em conformidade com as leis e regulamentos de proteção de dados pessoais (Lei Geral de Proteção de Dados), bem como direitos conexos.' 
  },
  { 
    id: 'e-tatica', 
    name: 'Equipe Tática', 
    description: 'Grupo de profissionais que atua em nível operacional e estratégico para implementar planos e ações alinhadas às metas maiores da empresa.' 
  },
  { 
    id: 'c-deip', 
    name: 'Comitê de DEI&P', 
    description: 'Equipe que está à frente do Trilhando+ e que lidera as ações de conscientização dos temas de Diversidade, Equidade, Inclusão e Pertencimento.' 
  },
  {
    id: 'metarh-institucional',
    name: 'METARH',
    description: 'A METARH é uma consultoria de recursos humanos com mais de 40 anos de mercado, com atuação nacional, processos 100% digitais e soluções em recrutamento, seleção e gestão de pessoas que aceleram o sucesso de empresas e profissionais.'
  }
];
