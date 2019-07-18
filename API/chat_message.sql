SELECT 
  use.id_use, 
  message.id_use, 
  use.id_name, 
  message.id_message
FROM 
  public.message, 
  public.use
WHERE 
  use.id_name = message.id_use;
