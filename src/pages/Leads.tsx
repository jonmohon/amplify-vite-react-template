import { useEffect } from 'react';
import { useLeads } from '../hooks/useLeads';

export default function Leads() {
  const { leads, loading, error, fetchLeads } = useLeads();

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      {leads.length === 0 ? (
        <p>No leads found</p>
      ) : (
        <ul className="space-y-2">
          {leads.map((lead) => (
            <li key={lead.id} className="border p-3 rounded">
              <p>{lead.id}</p>
              <p className="text-gray-600">{lead.email}</p>
              <p className="text-sm text-gray-400">
                {new Date(lead.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}