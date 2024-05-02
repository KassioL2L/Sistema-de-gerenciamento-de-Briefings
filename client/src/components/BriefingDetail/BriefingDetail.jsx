import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBriefingById } from '../../services/api';

const BriefingDetail = () => {
  const { briefingId } = useParams();
  const [briefing, setBriefing] = useState(null);

  useEffect(() => {
    const fetchBriefing = async () => {
      try {
        const data = await getBriefingById(briefingId);
        setBriefing(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBriefing();
  }, [briefingId]);

  if (!briefing) return <div>Loading...</div>;

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('pt-BR', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
};

  return (
    <>
      <h1>{briefing.clientName}</h1>
      <p>{briefing.description}</p>
      <p>{formatDate(briefing.dateTime)}</p>
    </>
  );
};

export default BriefingDetail;
