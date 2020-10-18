import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default function SiteRouting() {
  return (
    <div className="siteRouting">
      <p>ЛИЧНЫЙ ПРОФИЛЬ</p>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Главная
        </Link>
        <Link color="inherit" href="/getting-started/installation/">
          Личный профиль
        </Link>
      </Breadcrumbs>
    </div>
  );
}
