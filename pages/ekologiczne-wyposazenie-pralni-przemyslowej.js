/*
 * http://localhost:3000/ekologiczne-wyposazenie-pralni-przemyslowej
 */

import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';
import PageLayout from '../components/Layout/PageLayout';

function GreenPassport() {
  return <SiteInProgress page="GREEN PASSPORT" />;
}
GreenPassport.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default GreenPassport;
