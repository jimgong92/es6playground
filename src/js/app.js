let logDefaults = (a='Default Value', ...rest) => { 
  console.log(a) 
  if(rest.length > 0) logDefaults(rest)
}
logDefaults()
logDefaults(undefined,'We','Are','Variadic','Args')
logDefaults("Let's do some object destructuring")

