import type { Metadata } from "next";
import JoinMesaScreen from "@/components/JoinMesaScreen";
import { MESA_CODE_PATTERN, SITE_NAME, SITE_URL } from "@/lib/site-config";

type JoinPageProps = {
  params: Promise<{ code: string }>;
};

export async function generateMetadata({
  params,
}: JoinPageProps): Promise<Metadata> {
  const { code } = await params;
  const normalized = code.toUpperCase();
  const valid = MESA_CODE_PATTERN.test(code);

  return {
    title: valid ? `Unirse a la mesa ${normalized}` : "Código de mesa",
    description: valid
      ? `Te invitaron a una mesa Reymar. Código ${normalized}.`
      : "Ese código de mesa no tiene el formato esperado.",
    alternates: {
      canonical: `${SITE_URL}/join/${code}`,
    },
    robots: { index: false, follow: false },
  };
}

export default async function JoinPage({ params }: JoinPageProps) {
  const { code } = await params;
  const valid = MESA_CODE_PATTERN.test(code);

  return (
    <JoinMesaScreen
      code={valid ? code.toUpperCase() : code}
      valid={valid}
      siteName={SITE_NAME}
    />
  );
}
