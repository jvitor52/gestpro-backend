import moment from 'moment';
import prisma from '../src/configs/prisma.config';

async function main() {
  const existingModuleAdmin = await prisma.module.findFirst({
    where: {
      name: 'Admin',
    },
  });

  if (!existingModuleAdmin) {
    await prisma.module.create({
      data: {
        name: 'Admin',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingModuleTorax = await prisma.module.findFirst({
    where: {
      name: 'Tórax',
    },
  });

  if (!existingModuleTorax) {
    await prisma.module.create({
      data: {
        name: 'Tórax',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingModuleTriaderm = await prisma.module.findFirst({
    where: {
      name: 'Triaderm',
    },
  });

  if (!existingModuleTriaderm) {
    await prisma.module.create({
      data: {
        name: 'Triaderm',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterVilaSanta =
    await prisma.participating_center.findFirst({
      where: {
        name: 'Hosp. Vila Santa Catarina (SP)',
      },
    });

  if (!existingParticipatingCenterVilaSanta) {
    await prisma.participating_center.create({
      data: {
        name: 'Hosp. Vila Santa Catarina (SP)',
        is_active: true,
        html: `<html><head><meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar na interpretação de radiografias de tórax”.</p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem como das possibilidades de riscos e benefícios e confirmar sua participação através da assinatura desse termo de consentimento livre e esclarecido.</p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.</p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua relação profissional com a instituição. </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os médicos na leitura de radiografias de tórax.</p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem
                        do raio-X. Se você optar participar deste estudo, os seus dados clínicos e a imagem da
                        sua radiografia serão enviados por meio de um aplicativo de celular para um grupo de
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame,
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X.</p>
                    <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de seu médico.</p>
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido 
                        às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter 
                        os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como 
                        dos dados coletados por meio dos questionários.
                    </p>
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais).
                    </p>
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter 
                        maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura 
                        de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X.
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.                
                    </p>
                    <p style='text-align:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='font-weight:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição 
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres 
                        humanos em nossa instituição. 
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em 
                        contato com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo 
                        telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Para qualquer dúvida 
                        geral e/ou relacionada a direitos do participante, favor entrar em contato com o Comitê 
                        de Ética em Pesquisa no telefone (11) 2151-3729/ FAX 11 2151-0272 / e-mail 
                        cep@einstein.br. O Comitê funciona de segunda a sexta, das 7h às 17h.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento 
                        ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado 
                        como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.</p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.
                    </p>            
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 01/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterAma =
    await prisma.participating_center.findFirst({
      where: {
        name: 'AMA Paraisópolis (SP)',
      },
    });

  if (!existingParticipatingCenterAma) {
    await prisma.participating_center.create({
      data: {
        name: 'AMA Paraisópolis (SP)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>				
                
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar na interpretação de radiografias de tórax”.</p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem como das possibilidades de riscos e benefícios e confirmar sua participação através da assinatura desse termo de consentimento livre e esclarecido.</p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.</p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua relação profissional com a instituição. </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os médicos na leitura de radiografias de tórax.</p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem
                        do raio-X. Se você optar participar deste estudo, os seus dados clínicos e a imagem da
                        sua radiografia serão enviados por meio de um aplicativo de celular para um grupo de
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame,
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X.</p>
                    <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de seu médico.</p>
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido 
                        às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter 
                        os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como 
                        dos dados coletados por meio dos questionários.
                    </p>
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais).
                    </p>
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter 
                        maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura 
                        de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X.
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.                
                    </p>
                    <p style='text-align:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='font-weight:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição 
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres 
                        humanos em nossa instituição. 
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em 
                        contato com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo 
                        telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Para qualquer dúvida 
                        geral e/ou relacionada a direitos do participante, favor entrar em contato com o Comitê 
                        de Ética em Pesquisa no telefone (11) 2151-3729/ FAX 11 2151-0272 / e-mail 
                        cep@einstein.br. O Comitê funciona de segunda a sexta, das 7h às 17h.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento 
                        ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado 
                        como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.</p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.
                    </p>            
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 01/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterCms =
    await prisma.participating_center.findFirst({
      where: {
        name: 'CMS de Caxias (RJ)',
      },
    });

  if (!existingParticipatingCenterCms) {
    await prisma.participating_center.create({
      data: {
        name: 'CMS de Caxias (RJ)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>				
                
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado “Validação 
                        clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar na interpretação 
                        de radiografias de tórax”.
                    </p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem 
                        como das possibilidades de riscos e benefícios e confirmar sua participação através da 
                        assinatura desse termo de consentimento livre e esclarecido.
                    </p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à 
                        vontade para entrar em contato com o médico responsável pela condução do estudo ou com 
                        algum profissional que participa do estudo e que possa esclarecer suas dúvidas.
                    </p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou
                        retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua 
                        relação profissional com a instituição.
                    </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os 
                        médicos na leitura de radiografias de tórax. 
                    </p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua 
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta 
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem do 
                        raio-X. Se você optar participar deste estudo, seus dados clínicos e a imagem da sua 
                        radiografia serão enviados por meio de um aplicativo de celular para um grupo de 
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame, 
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X. 
                    </p>		
              <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos 
                        especialistas. 
                    </p>		
                    <p style='text-align:justify'>Ressaltamos que as imagens serão analisadas de forma anonimizada pelos pesquisadores e 
                        que o resultado da inteligência artificial não influenciará a abordagem de seu médico.
                    </p>
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido às 
                        limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter os 
                        esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como dos 
                        dados coletados por meio dos questionários.
                    </p>
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais). 
                    </p>
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter maior 
                        conhecimento científico sobre o tema, além de melhorar a assertividade na leitura de 
                        radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X. 
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza. 
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.
                    </p>
                    <p style='font-weight:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='font-weight:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição
                        proponente (hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres
                        humanos em nossa instituição. 
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida ética e/ou relacionada a direitos do participante de pesquisa, entre em 
                        contato com o Comitê de Ética em Pesquisa da Secretaria Municipal de Saúde do Rio de 
                        Janeiro - Rua: Evaristo da Veiga, 16 - 4º andar - Sala 401 – Centro/Rio de Janeiro – Tel.: 
                        (21) 2215-1485 - CEP: 20031-040 - E-mail: cepsms@rio.rj.gov.br 
                        ou cepsmsrj@yahoo.com.br ou com a pesquisadora Maria Carolina Bueno da Silva pelo 
                        telefone (11) 99831-4571.
                    </p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.
                    </p>            
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 11/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterClemente =
    await prisma.participating_center.findFirst({
      where: {
        name: 'Instituto Clemente Ferreira (SP)',
      },
    });

  if (!existingParticipatingCenterClemente) {
    await prisma.participating_center.create({
      data: {
        name: 'Instituto Clemente Ferreira (SP)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>				
                
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado “Validação 
                        clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar na interpretação 
                        de radiografias de tórax”.
                    </p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem 
                        como das possibilidades de riscos e benefícios e confirmar sua participação através da 
                        assinatura desse termo de consentimento livre e esclarecido.
                    </p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à 
                        vontade para entrar em contato com o médico responsável pela condução do estudo ou com 
                        algum profissional que participa do estudo e que possa esclarecer suas dúvidas.
                    </p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou
                        retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua 
                        relação profissional com a instituição.
                    </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os 
                        médicos na leitura de radiografias de tórax.
                    </p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua 
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta 
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem do 
                        raio-X. Se você optar participar deste estudo, seus dados clínicos e a imagem da sua 
                        radiografia serão enviados por meio de um aplicativo de celular para um grupo de 
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame, 
                        juntamente com uma equipe de radiologistas torácicos. Você e o seu médico não terão 
                        acesso à opinião desta ferramenta ou à opinião dos especialistas. Ressaltamos que as 
                        imagens serão analisadas de forma anonimizada pelos pesquisadores e que o resultado da
                        inteligência artificial não influenciará a abordagem de seu médico.
                    </p>					
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido às 
                        limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter os
                        esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como dos 
                        dados coletados por meio dos questionários.
                    </p>					
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter maior 
                        conhecimento científico sobre o tema, além de melhorar a assertividade na leitura de 
                        radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X.
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.
                    </p>			
                    <p style='font-weight:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>			
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>			
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='font-weight:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres
                        humanos em nossa instituição.
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida ética e/ou relacionada a direitos do participante de pesquisa, entre em 
                        contato com o Comitê de Ética em Pesquisa do Hospital Albert Einstein pelo telefone (11) 
                        2151-3729/ FAX (11) 2151-0273, ou pelo e-mail cep@einstein.br. O Comitê funciona de 
                        segunda a sexta, das 7h às 17h. Ou sinta-se à vontade para entrar em contato com os
                        responsáveis pela condução do estudo, com Maria Carolina Bueno pelo telefone (11)
                        99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Ou com dra. Denise Rodrigues pelo 
                        telefone (11) 98197-9576 ou pelo e-mail denise.rodrigues@saude.sp.gov.br.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento ao 
                        Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado como 
                        “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.
                    </p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.
                    </p>            
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 10/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterUmuarama =
    await prisma.participating_center.findFirst({
      where: {
        name: 'UBS Alto do Umuarama (SP)',
      },
    });

  if (!existingParticipatingCenterUmuarama) {
    await prisma.participating_center.create({
      data: {
        name: 'UBS Alto do Umuarama (SP)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>				
                
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado 
                        “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar 
                        na interpretação de radiografias de tórax”.
                    </p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem 
                        como das possibilidades de riscos e benefícios e confirmar sua participação através da 
                        assinatura desse termo de consentimento livre e esclarecido.
                    </p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo 
                        ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.                
                    </p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou 
                        retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua 
                        relação profissional com a instituição.
                    </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os 
                        médicos na leitura de radiografias de tórax. 
                    </p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem
                        do raio-X. Se você optar participar deste estudo, os seus dados clínicos e a imagem da
                        sua radiografia serão enviados por meio de um aplicativo de celular para um grupo de
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame,
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X.
                    </p>					
                    <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos
                        especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos
                        pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de
                        seu médico.
                    </p>
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido 
                        às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter 
                        os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como 
                        dos dados coletados por meio dos questionários.
                    </p>					
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais). 
                    </p>					
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter 
                        maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura 
                        de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X.
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.
                    </p>			
                    <p style='font-weight:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>			
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>			
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='font-weight:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição 
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres 
                        humanos em nossa instituição.
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em 
                        contato com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo 
                        telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Para qualquer dúvida 
                        geral e/ou relacionada a direitos do participante, favor entrar em contato com o Comitê 
                        de Ética em Pesquisa no telefone (11) 2151-3729/ FAX 11 2151-0272 / e-mail 
                        cep@einstein.br. O Comitê funciona de segunda a sexta, das 7h às 17h.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento 
                        ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado 
                        como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.
                    </p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.
                    </p>                        
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 01/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterParaisopolis =
    await prisma.participating_center.findFirst({
      where: {
        name: 'UBS Paraisópolis III (SP)',
      },
    });

  if (!existingParticipatingCenterParaisopolis) {
    await prisma.participating_center.create({
      data: {
        name: 'UBS Paraisópolis III (SP)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>						
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado 
                        “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar 
                        na interpretação de radiografias de tórax”.
                    </p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem 
                        como das possibilidades de riscos e benefícios e confirmar sua participação através da 
                        assinatura desse termo de consentimento livre e esclarecido.
                    </p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo 
                        ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.
                    </p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou 
                        retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua 
                        relação profissional com a instituição.
                    </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os 
                        médicos na leitura de radiografias de tórax.
                    </p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem
                        do raio-X. Se você optar participar deste estudo, os seus dados clínicos e a imagem da
                        sua radiografia serão enviados por meio de um aplicativo de celular para um grupo de
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame,
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X.
                    </p>	
                    <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos
                        especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos
                        pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de
                        seu médico.
                    </p>				
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido 
                        às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter 
                        os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como 
                        dos dados coletados por meio dos questionários.
                    </p>					
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais).
                    </p>					
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter 
                        maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura 
                        de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X.
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify;margin-bottom:120px'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:80px;'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.
                    </p>						
                    <p style='font-weight:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>			
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='font-weight:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição 
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres 
                        humanos em nossa instituição.
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em 
                        contato com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo 
                        telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Para qualquer dúvida 
                        geral e/ou relacionada a direitos do participante, favor entrar em contato com o Comitê 
                        de Ética em Pesquisa no telefone (11) 2151-3729/ FAX 11 2151-0272 / e-mail 
                        cep@einstein.br. O Comitê funciona de segunda a sexta, das 7h às 17h.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento 
                        ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado 
                        como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.
                    </p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.</p>                        
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 01/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterParque =
    await prisma.participating_center.findFirst({
      where: {
        name: 'UBS Parque Arariba (SP)',
      },
    });

  if (!existingParticipatingCenterParque) {
    await prisma.participating_center.create({
      data: {
        name: 'UBS Parque Arariba (SP)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>						
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado 
                        “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar 
                        na interpretação de radiografias de tórax”.
                    </p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem 
                        como das possibilidades de riscos e benefícios e confirmar sua participação através da 
                        assinatura desse termo de consentimento livre e esclarecido.
                    </p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo 
                        ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.
                    </p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou 
                        retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua 
                        relação profissional com a instituição.
                    </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os 
                        médicos na leitura de radiografias de tórax.
                    </p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem
                        do raio-X. Se você optar participar deste estudo, os seus dados clínicos e a imagem da
                        sua radiografia serão enviados por meio de um aplicativo de celular para um grupo de
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame,
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X.
                    </p>	
                    <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos
                        especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos
                        pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de
                        seu médico.
                    </p>				
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido 
                        às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter 
                        os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como 
                        dos dados coletados por meio dos questionários.
                    </p>					
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais).
                    </p>					
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter 
                        maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura 
                        de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X.
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.
                    </p>						
                    <p style='font-weight:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>						
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>			
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='font-weight:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição 
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres 
                        humanos em nossa instituição.
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em 
                        contato com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo 
                        telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Para qualquer dúvida 
                        geral e/ou relacionada a direitos do participante, favor entrar em contato com o Comitê 
                        de Ética em Pesquisa no telefone (11) 2151-3729/ FAX 11 2151-0272 / e-mail 
                        cep@einstein.br. O Comitê funciona de segunda a sexta, das 7h às 17h.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento 
                        ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado 
                        como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.
                    </p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.
                    </p>                        
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 01/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterHelga =
    await prisma.participating_center.findFirst({
      where: {
        name: 'UBS Jardim Helga (SP)',
      },
    });

  if (!existingParticipatingCenterHelga) {
    await prisma.participating_center.create({
      data: {
        name: 'UBS Jardim Helga (SP)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>						
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado 
                        “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar 
                        na interpretação de radiografias de tórax”.
                    </p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem 
                        como das possibilidades de riscos e benefícios e confirmar sua participação através da 
                        assinatura desse termo de consentimento livre e esclarecido.
                    </p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo 
                        ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.
                    </p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou 
                        retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua 
                        relação profissional com a instituição.
                    </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os 
                        médicos na leitura de radiografias de tórax.
                    </p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem
                        do raio-X. Se você optar participar deste estudo, os seus dados clínicos e a imagem da
                        sua radiografia serão enviados por meio de um aplicativo de celular para um grupo de
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame,
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X.
                    </p>			
                    <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos
                        especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos 
                        pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de
                        seu médico.
                    </p>		
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido 
                        às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter 
                        os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como 
                        dos dados coletados por meio dos questionários.
                    </p>					
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais).
                    </p>					
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter 
                        maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura 
                        de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X.
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.
                    </p>						
                    <p style='font-weight:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>						
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>			
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='font-weight:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição 
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres 
                        humanos em nossa instituição.
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em 
                        contato com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo 
                        telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Para qualquer dúvida 
                        geral e/ou relacionada a direitos do participante, favor entrar em contato com o Comitê 
                        de Ética em Pesquisa no telefone (11) 2151-3729/ FAX 11 2151-0272 / e-mail 
                        cep@einstein.br. O Comitê funciona de segunda a sexta, das 7h às 17h.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento 
                        ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado 
                        como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.
                    </p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.
                    </p>                        
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 01/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterMitsutani =
    await prisma.participating_center.findFirst({
      where: {
        name: 'UBS Jardim Mitsutani (SP)',
      },
    });

  if (!existingParticipatingCenterMitsutani) {
    await prisma.participating_center.create({
      data: {
        name: 'UBS Jardim Mitsutani (SP)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>						
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado 
                        “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar 
                        na interpretação de radiografias de tórax”.
                    </p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem 
                        como das possibilidades de riscos e benefícios e confirmar sua participação através da 
                        assinatura desse termo de consentimento livre e esclarecido.
                    </p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo 
                        ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.
                    </p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou 
                        retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua 
                        relação profissional com a instituição.
                    </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os 
                        médicos na leitura de radiografias de tórax.
                    </p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem
                        do raio-X. Se você optar participar deste estudo, os seus dados clínicos e a imagem da
                        sua radiografia serão enviados por meio de um aplicativo de celular para um grupo de
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame,
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X.
                    </p>		
                    <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos
                        especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos
                        pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de
                        seu médico.
                    </p>			
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido 
                        às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter 
                        os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como 
                        dos dados coletados por meio dos questionários.
                    </p>					
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais). 
                    </p>					
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter 
                        maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura 
                        de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X. 
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.
                    </p>						
                    <p style='font-weight:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>						
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>			
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='font-weight:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição 
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres 
                        humanos em nossa instituição.
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em 
                        contato com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo 
                        telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Para qualquer dúvida 
                        geral e/ou relacionada a direitos do participante, favor entrar em contato com o Comitê 
                        de Ética em Pesquisa no telefone (11) 2151-3729/ FAX 11 2151-0272 / e-mail 
                        cep@einstein.br. O Comitê funciona de segunda a sexta, das 7h às 17h.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento 
                        ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado 
                        como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.
                    </p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.
                    </p>
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 01/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterOlinda =
    await prisma.participating_center.findFirst({
      where: {
        name: 'UBS Jardim Olinda (SP)',
      },
    });

  if (!existingParticipatingCenterMitsutani) {
    await prisma.participating_center.create({
      data: {
        name: 'UBS Jardim Olinda (SP)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>						
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado 
                        “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar 
                        na interpretação de radiografias de tórax”.
                    </p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem 
                        como das possibilidades de riscos e benefícios e confirmar sua participação através da 
                        assinatura desse termo de consentimento livre e esclarecido.
                    </p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo 
                        ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.
                    </p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou 
                        retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua 
                        relação profissional com a instituição.
                    </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os 
                        médicos na leitura de radiografias de tórax.
                    </p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem
                        do raio-X. Se você optar participar deste estudo, os seus dados clínicos e a imagem da
                        sua radiografia serão enviados por meio de um aplicativo de celular para um grupo de
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame,
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X.
                    </p>	
                    <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos
                        especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos
                        pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de
                        seu médico.
                    </p>				
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido 
                        às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter 
                        os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como 
                        dos dados coletados por meio dos questionários.
                    </p>						
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais).
                    </p>		
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter 
                        maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura 
                        de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X.
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.
                    </p>
                    <p style='font-weight:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>			
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>						
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='text-align:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição 
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres 
                        humanos em nossa instituição.
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em 
                        contato com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo 
                        telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Para qualquer dúvida 
                        geral e/ou relacionada a direitos do participante, favor entrar em contato com o Comitê 
                        de Ética em Pesquisa no telefone (11) 2151-3729/ FAX 11 2151-0272 / e-mail 
                        cep@einstein.br. O Comitê funciona de segunda a sexta, das 7h às 17h.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento 
                        ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado 
                        como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.
                    </p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.
                    </p>                        
                </div>
            </body>
          </html>`,
        version: 'Versão 4 – Data: 01/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterNutes =
    await prisma.participating_center.findFirst({
      where: {
        name: 'UFPE – NUTES (PE)',
      },
    });

  if (!existingParticipatingCenterNutes) {
    await prisma.participating_center.create({
      data: {
        name: 'UFPE – NUTES (PE)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>						
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado 
                        “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar 
                        na interpretação de radiografias de tórax”.
                    </p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem 
                        como das possibilidades de riscos e benefícios e confirmar sua participação através da 
                        assinatura desse termo de consentimento livre e esclarecido.
                    </p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo 
                        ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.
                    </p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou 
                        retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua 
                        relação profissional com a instituição.
                    </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os 
                        médicos na leitura de radiografias de tórax.
                    </p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem
                        do raio-X. Se você optar participar deste estudo, os seus dados clínicos e a imagem da
                        sua radiografia serão enviados por meio de um aplicativo de celular para um grupo de
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame,
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X.
                    </p>	
                    <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos
                        especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos
                        pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de
                        seu médico.
                    </p>				
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido 
                        às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter 
                        os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como 
                        dos dados coletados por meio dos questionários.
                    </p>						
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais).
                    </p>		
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter 
                        maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura 
                        de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X.
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.
                    </p>
                    <p style='font-weight:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>			
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>						
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='text-align:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição 
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres 
                        humanos em nossa instituição.
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em 
                        contato com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo 
                        telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Para qualquer dúvida 
                        geral e/ou relacionada a direitos do participante, favor entrar em contato com o Comitê 
                        de Ética em Pesquisa no telefone (11) 2151-3729/ FAX 11 2151-0272 / e-mail 
                        cep@einstein.br. O Comitê funciona de segunda a sexta, das 7h às 17h.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento 
                        ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado 
                        como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.
                    </p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.
                    </p>                        
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 01/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterCampo =
    await prisma.participating_center.findFirst({
      where: {
        name: 'UPA Campo Limpo (SP)',
      },
    });

  if (!existingParticipatingCenterCampo) {
    await prisma.participating_center.create({
      data: {
        name: 'UPA Campo Limpo (SP)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>						
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado 
                        “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar 
                        na interpretação de radiografias de tórax”.
                    </p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem 
                        como das possibilidades de riscos e benefícios e confirmar sua participação através da 
                        assinatura desse termo de consentimento livre e esclarecido.
                    </p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo 
                        ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.
                    </p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou 
                        retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua 
                        relação profissional com a instituição.
                    </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os 
                        médicos na leitura de radiografias de tórax.
                    </p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem
                        do raio-X. Se você optar participar deste estudo, os seus dados clínicos e a imagem da
                        sua radiografia serão enviados por meio de um aplicativo de celular para um grupo de
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame,
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X.
                    </p>					
                    <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos
                        especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos
                        pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de
                        seu médico.
                    </p>
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido 
                        às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter 
                        os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como 
                        dos dados coletados por meio dos questionários.
                    </p>								
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais).
                    </p>								
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter 
                        maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura 
                        de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X.
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.                
                    </p>						
                    <p style='font-weight:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>									
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>									
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='text-align:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição 
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres 
                        humanos em nossa instituição.
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em 
                        contato com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo 
                        telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Para qualquer dúvida 
                        geral e/ou relacionada a direitos do participante, favor entrar em contato com o Comitê 
                        de Ética em Pesquisa no telefone (11) 2151-3729/ FAX 11 2151-0272 / e-mail 
                        cep@einstein.br. O Comitê funciona de segunda a sexta, das 7h às 17h.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento 
                        ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado 
                        como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.
                    </p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.</p>            
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 01/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterSanta =
    await prisma.participating_center.findFirst({
      where: {
        name: 'UPA Vila Santa Catarina (SP)',
      },
    });

  if (!existingParticipatingCenterSanta) {
    await prisma.participating_center.create({
      data: {
        name: 'UPA Vila Santa Catarina (SP)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>						
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado 
                        “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar 
                        na interpretação de radiografias de tórax”.
                    </p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem 
                        como das possibilidades de riscos e benefícios e confirmar sua participação através da 
                        assinatura desse termo de consentimento livre e esclarecido.
                    </p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo 
                        ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.
                    </p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou 
                        retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua 
                        relação profissional com a instituição.
                    </p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os 
                        médicos na leitura de radiografias de tórax.
                    </p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua
                        condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta
                        final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem
                        do raio-X. Se você optar participar deste estudo, os seus dados clínicos e a imagem da
                        sua radiografia serão enviados por meio de um aplicativo de celular para um grupo de
                        pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame,
                        juntamente com uma equipe de radiologistas torácicos. Trata-se de um programa de 
                        computador que está sendo testado e que poderá auxiliá-lo identificando as alterações 
                        pulmonares (se elas estiverem presentes) bem como identificando a correta localização 
                        destes achados no raio-X.
                    </p>	
                    <p style='text-align:justify'>Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos
                        especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos
                        pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de
                        seu médico.
                    </p>				
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido 
                        às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo 
                        vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter 
                        os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como 
                        dos dados coletados por meio dos questionários.
                    </p>								
                    <p style='text-align:justify'>Destacamos que as informações coletadas no seu prontuário bem como as radiografias de 
                        tórax, poderão ficar armazenadas em nossos arquivos por 5 anos. Depois deste prazo, os 
                        dados poderão ser devidamente descartados. O descarte segue a recomendação da Lei nº 
                        13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais).
                    </p>								
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de 
                        radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter 
                        maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura 
                        de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos 
                        pacientes com achados graves detectados pelo raio-X.
                    </p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu 
                        relacionamento com a equipe médica e de apoio.
                    </p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar 
                        sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo 
                        de qualquer natureza.
                    </p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de 
                        buscar indenização em caso de dano decorrente de sua participação.
                    </p>						
                    <p style='font-weight:justify'>Se for de seu interesse, você poderá solicitar, a qualquer momento, informações sobre os 
                        resultados de exames ou testes realizados nesse estudo.
                    </p>									
                    <p style='font-weight:justify'>Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas 
                        as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução 
                        CNS nº 466 de 2012, itens II.11 e II.16).
                    </p>									
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e 
                        possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em 
                        nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas 
                        condições de confidencialidade.
                    </p>
                    <p style='text-align:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição 
                        proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos 
                        pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do 
                        material coletado após o fim deste prazo.
                    </p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas 
                        que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres 
                        humanos em nossa instituição.
                    </p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em 
                        contato com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo 
                        telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br. Para qualquer dúvida 
                        geral e/ou relacionada a direitos do participante, favor entrar em contato com o Comitê 
                        de Ética em Pesquisa no telefone (11) 2151-3729/ FAX 11 2151-0272 / e-mail 
                        cep@einstein.br. O Comitê funciona de segunda a sexta, das 7h às 17h.
                    </p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento 
                    ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado 
                    como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.
                    </p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.
                        Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e 
                        Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.
                    </p>                        
                </div>
            </body>
        </html>`,
        version: 'Versão 4 – Data: 01/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingParticipatingCenterAparecida =
    await prisma.participating_center.findFirst({
      where: {
        name: 'Hosp. Mun. de Aparecida de Goiânia (GO)',
      },
    });

  if (!existingParticipatingCenterAparecida) {
    await prisma.participating_center.create({
      data: {
        name: 'Hosp. Mun. de Aparecida de Goiânia (GO)',
        is_active: true,
        html: `<html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <div style='padding:30'>				
                
                    <p style='text-align:center;font-size:14px;font-weight:bold; border:1px solid black;line-height:3'>Termo de Consentimento Livre e Esclarecido</p>
                    <p style='font-weight:bold'>Introdução</p>
                    <p style='text-align:justify'>Você está sendo convidado para participar voluntariamente do estudo intitulado “Validação clínica de um algoritmo de inteligência artificial desenvolvido para auxiliar na interpretação de radiografias de tórax”.</p>
                    <p style='text-align:justify'>Para você decidir fazer parte dele, precisará saber no que consiste sua participação, bem como das possibilidades de riscos e benefícios e confirmar sua participação através da assinatura desse termo de consentimento livre e esclarecido.</p>
                    <p style='text-align:justify'>Se você tiver qualquer pergunta, após ou durante a leitura desse termo, por favor, sinta-se à vontade para entrar em contato com o médico responsável pela condução do estudo ou com algum profissional que participa do estudo e que possa esclarecer suas dúvidas.</p>
                    <p style='text-align:justify'>A decisão de fazer parte do estudo é voluntária e você pode recusar-se a participar ou retirar-se do estudo a qualquer momento sem nenhum tipo de consequência para a sua relação com a instituição.</p>
                    <p style='text-align:justify'>O objetivo dessa pesquisa é testar um modelo de inteligência artificial que auxiliará os médicos na leitura de radiografias de tórax.</p>
                    <p style='font-weight:bold'>Procedimentos realizados neste protocolo</p>
                    <p style='text-align:justify'>Durante a sua consulta, o seu médico solicitou uma radiografia de tórax para avaliar sua condição pulmonar. O seu médico irá interpretar a radiografia normalmente e a conduta final será dele, com base em seus dados clínicos, seus exames laboratoriais e na imagem do raio-X. Se você optar participar deste estudo, a imagem da sua radiografia será enviada por meio de um aplicativo de celular para um grupo de pesquisadores e um algoritmo que utiliza inteligência artificial irá interpretar seu exame, juntamente com uma equipe de radiologistas torácicos. Você e o seu médico não terão acesso à opinião desta ferramenta ou à opinião dos especialistas. Ressaltamos que as imagens serão analisadas de forma anonimizada pelos pesquisadores e que o resultado da inteligência artificial não influenciará a abordagem de seu médico.</p>		
                    <p style='font-weight:bold'>Riscos e inconveniências</p>
                    <p style='text-align:justify'>O risco será mínimo, como por exemplo perda de confidencialidade, uma vez que devido às limitações das tecnologias envolvendo o ambiente virtual, poderá haver por exemplo vazamento dos dados. Ainda assim, a equipe de pesquisadores se compromete a manter os esforços para resguardar o sigilo e a confidencialidade da sua identidade bem como dos dados coletados por meio dos questionários.</p>
                    <p style='font-weight:bold'>Benefício do Estudo</p>
                    <p style='text-align:justify'>Através deste trabalho, espera-se testar clinicamente algoritmos de interpretação de radiografias de tórax. Os benefícios serão para o conjunto da coletividade, ao se obter maior conhecimento científico sobre o tema, além de melhorar a assertividade na leitura de radiografias de tórax, agilizar a fila de atendimentos e diminuir o tempo de espera dos pacientes com achados graves detectados pelo raio-X.</p>
                    <p style='font-weight:bold'>Alternativa (s) à participação no estudo</p>
                    <p style='text-align:justify'>A não aceitação deste termo, não irá de forma alguma influenciar ou alterar o seu relacionamento com a equipe médica e de apoio.</p>
                    <p style='font-weight:bold;margin-top:120px'>Direitos do participante</p>
                    <p style='text-align:justify'>Sua participação é voluntária e você pode retirar seu consentimento ou ainda descontinuar sua participação em qualquer momento, se assim o preferir, sem penalização e/ou prejuízo de qualquer natureza.</p>
                    <p style='font-weight:justify'>Ao assinar este termo você não abre mão de nenhum direito legal, incluindo o direito de buscar indenização em caso de dano decorrente de sua participação. Ressalva-se ainda que você não terá qualquer custo se aceitar participar do estudo e todas as despesas tidas com a pesquisa serão de responsabilidade do PROADI -SUS (Resolução CNS nº 466 de 2012, itens II.11 e II.16).</p>			
                    <p style='font-weight:bold'>Confidencialidade</p>
                    <p style='text-align:justify'>A equipe do estudo terá acesso a seus dados, no entanto, seu anonimato é garantido e possíveis publicações cientificas resultantes deste estudo não o (a) identificarão em nenhuma circunstância como participante. Os dados obtidos serão tratados sob estritas condições de confidencialidade.</p>
                    <p style='font-weight:justify'>Os dados coletados nesta pesquisa serão armazenados em banco de dados da instituição proponente (Hospital Israelita Albert Einstein) e só poderão ser acessados pelos pesquisadores. O tempo de armazenamento deverá ser de 5 anos e haverá o descarte do material coletado após o fim deste prazo.</p>
                    <p style='text-align:bold'>Ética</p>
                    <p style='text-align:justify'>Este estudo foi aprovado pelo Comitê de Ética em Pesquisa (CEP), um grupo de pessoas que zela pela proteção dos participantes de pesquisas e avalia os estudos envolvendo seres humanos em nossa instituição.</p>
                    <p style='text-align:justify'>Para qualquer dúvida relacionada ao estudo, por favor, sinta-se à vontade para entrar em contato com o Comitê de Ética em Pesquisa Instituto de Ciências Farmacêuticas de Estudos e Pesquisas – CEP ICF, pelo telefone (62) 3240-1906, e-mail cep@icf.com.br, ou pessoalmente no endereço Av. Rio Verde, Qd -06 – Lt – 1 a 7, Bairro Cidade Vera Cruz, Aparecida de Goiânia, Goiás, ou com os responsáveis pela condução do estudo, com Maria Carolina Bueno pelo telefone (11) 99831-4571 ou pelo e-mail maria.cbsilva@einstein.br ou com Mayler Olombrada Nunes (62) 98572-0102.</p>
                    <p style='text-align:justify'>Reclamações, elogios e sugestões poderão ser encaminhados ao Sistema de Atendimento ao Cliente (SAC) por meio do telefone (11) 2151-0222 ou do formulário identificado como “fale conosco”, disponível na página da pesquisa clínica, ou pessoalmente.</p>
                    <p style='text-align:justify'>Assinaturas de Consentimento</p>
                    <p style='text-align:justify'>Fui informado de todos os detalhes relacionados ao estudo em que participarei.Receberei uma via assinada, datada e rubricada deste Termo de Consentimento Livre e Esclarecido, ficando o pesquisador com outra via assinada, datada e rubricada.</p>            
                </div>
            </body>
        </html>`,
        version: 'Versão 2 – Data: 11/07/2023',
        created_at: moment().utcOffset(0).toDate(),
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
      },
    });
  }

  const existingUser = await prisma.user.findUnique({
    where: { uid: '123e4567-e89b-12d3-a456-426614174089' },
  });

  const module = await prisma.module.findFirst();
  const participating = await prisma.participating_center.findFirst();

  if (!existingUser) {
    await prisma.user.create({
      data: {
        uid: '123e4567-e89b-12d3-a456-426614174089',
        uid_keycloak: '123e4567-e89b-12d3-a456-426614174100',
        name: 'Marco',
        email: 'bcim012@einstein.br',
        user_module: {
          create: {
            id_module: module ? module?.id : 1,
          },
        },
        user_participating_center: {
          create: {
            id_participating_center: participating ? participating.id : 1,
          },
        },
      },
    });
  }

  const existingStatus = await prisma.user_status.findFirst({
    where: {
      uid_user: '123e4567-e89b-12d3-a456-426614174089',
      status: 'Ativo',
    },
  });

  if (!existingStatus) {
    await prisma.user_status.create({
      data: {
        uid_user: '123e4567-e89b-12d3-a456-426614174089',
        status: 'Ativo',
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error: any) => {
    console.error('Error seed: ', error);
    await prisma.$disconnect();
    process.exit(1);
  });
