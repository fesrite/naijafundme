// ============ SUPABASE CONFIG ============
const SUPABASE_URL = 'https://obvyapjyctttnznwmgux.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idnlhcGp5Y3R0dG56bndtZ3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyNzgwOTEsImV4cCI6MjA5ODg1NDA5MX0.UF1haEY6rpzh3get9XJSUy5VnNDFryBX7_G2IYkxzMI';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// Flutterwave public key
const FLW_PUBLIC_KEY = 'FLWPUBK-1ef012733a5608e5152d8424e92e40d6-X';
const BANK_DETAILS = { bank: 'Access Bank', accountName: 'Kolawole Festus', accountNumber: '1502236067' };
let currentView='home',currentCategory='all',campaigns=[],siteSettings={};
async function init(){await loadSiteSettings();await loadCampaigns();render();}
async function loadSiteSettings(){try{const{data,error}=await supabase.from('site_settings').select('*').eq('id',1).single();if(!error&&data)siteSettings=data;}catch(e){}}
async function loadCampaigns(){try{let q=supabase.from('campaigns').select('*').order('created_at',{ascending:false});if(currentCategory!=='all')q=q.eq('category',currentCategory);const{data,error}=await q;if(!error&&data)campaigns=data;}catch(e){}}