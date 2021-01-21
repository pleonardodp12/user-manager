export function cepMask(cep){
  cep=cep?.replace(/D/g,"")               
  cep=cep?.replace(/^(\d{5})(\d)/,"$1-$2") 
  return cep
};

export function cpfMask(value){
  value=value?.replace(/\D/g,"")                    
  value=value?.replace(/(\d{3})(\d)/,"$1.$2")
  value=value?.replace(/(\d{3})(\d)/,"$1.$2")
  value=value?.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return value
}