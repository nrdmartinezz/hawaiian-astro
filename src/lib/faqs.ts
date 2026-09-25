/**
 * FAQ collection queries. Pages pass the result into the FAQ block.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type FaqEntry = CollectionEntry<'faqs'>;

export interface FaqItem {
  question: string;
  answer: string;
}

const topicOrder = [
  'Practice',
  'General treatment',
  'Early treatment',
  'Invisalign First',
  'Braces',
  'Invisalign',
  'Adult treatment',
  'Emergencies',
  'Retention',
  'Insurance',
  'Payment plans',
];

export async function getAllFaqs(): Promise<FaqEntry[]> {
  const entries = await getCollection('faqs');
  return entries.sort((a, b) => {
    const topicDelta = topicOrder.indexOf(a.data.topic) - topicOrder.indexOf(b.data.topic);
    if (topicDelta !== 0) return topicDelta;
    return a.data.order - b.data.order;
  });
}

export function toFaqItem(entry: FaqEntry): FaqItem {
  return {
    question: entry.data.question,
    answer: (entry.body ?? '').trim(),
  };
}

/** Questions assigned to this page path, in topic and draft order. */
export async function getFaqsFor(pathname: string): Promise<FaqItem[]> {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const entries = await getAllFaqs();
  return entries.filter((entry) => entry.data.pages.includes(path)).map(toFaqItem);
}

export async function getFaqsByTopic(): Promise<{ topic: string; items: FaqItem[] }[]> {
  const entries = await getAllFaqs();
  const groups = new Map<string, FaqItem[]>();

  for (const entry of entries) {
    const items = groups.get(entry.data.topic) ?? [];
    items.push(toFaqItem(entry));
    groups.set(entry.data.topic, items);
  }

  return topicOrder
    .filter((topic) => groups.has(topic))
    .map((topic) => ({ topic, items: groups.get(topic) ?? [] }));
}
