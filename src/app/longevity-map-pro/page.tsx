import LongevityMapPro from '@/components/LongevityMapPro';
import PageLayout from '@/components/PageLayout';

export default function LongevityMapProPage() {
  return (
    <PageLayout>
      <div className="fixed inset-0 bg-gray-50">
        <LongevityMapPro />
      </div>
    </PageLayout>
  );
}
