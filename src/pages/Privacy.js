import * as React from 'react';

// Material UI
import { Typography, Box } from '@mui/material';

// Project Imports
import Page from '../components/Page'

// Data Imports
import { privacyTermsRu, privacyTermsEn } from '../privacyTerms'

// Redux
import { useDispatch } from 'react-redux';
import { setBackground, setNavLink } from '../redux/actions/layoutActions';

// Localization
import { useTranslation } from "react-i18next";

export default function Privacy({ t }){
    const { i18n } = useTranslation()
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setBackground(`/images/julia-kudina.webp`))
        dispatch(setNavLink(t('home.sectionNames.privacy'), `/`))
    }, [dispatch, t]);

    return (
        <Page 
        title={t("pages.privacy.metaTitle")}
        description={t("pages.privacy.metaDescription")}
        canonicalLink="/privacy"
        >
            <Typography mt={{xs: 12, md: 40}} sx={{fontSize: {xs: 35, md: 50}}} component='h1' variant='h2' color='text.primary'>
                {t("home.sectionNames.privacy")}
            </Typography>

            <Box sx={{ minWidth: 200, mt: {xs: 12, md: 25}, mb: 7 }}>
                {(i18n.language === "ru" ? privacyTermsRu : privacyTermsEn).terms.map((term, index) => (
                <Box key={term.name + index}>
                    <Typography component='h5' sx={{ marginBottom: '24px', fontSize: '20px', lineHeight: '22px', fontWeight: 500 }}>
                        {term.sectionId}. {term.name}
                    </Typography>

                    <Typography component='p' sx={{ fontSize: '16px', lineHeight: '24px' }}>
                        {term.describtion}
                    </Typography>

                    <ol style={{ listStyle: 'none', marginBottom: '24px' }}>
                        {term.subSections?.map((subSection, index) => (
                            <div key={subSection.subSectionId + index}>
                                <Typography component='li' sx={{ fontSize: '16px', lineHeight: '24px' }}>
                                <span>{subSection.subSectionId}.</span> {subSection.describtion}
                                </Typography>
                                {subSection.content?.map((item) => (
                                    <Typography key={item + index} component='span' sx={{ display: 'block', fontSize: '16px', lineHeight: '24px', listStyleType: 'JJJ' }}>
                                        – {item}
                                    </Typography>
                                ))}
                            </div>
                        ))}
                    </ol>
                </Box>
                ))}
            </Box>
        </Page>
    );
}