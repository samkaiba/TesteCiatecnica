using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Teste.Models
{
    [Table("Cliente")]

    public class Cliente
    {
        [Key()]
        [Display(Name = "Id")]
        [Column("Id")]
        public int Id { get; set; }

        //Pessoa Física
        [Display(Name = "CPF")]
        [Column("CPF")]
        [StringLength(14)]
        public string CPF { get; set; } 
        
        [Display(Name = "Data de Nascimento")]
        [Column("DtNasc")]
        [DataType(DataType.Date)]
        public DateTime? DtNasc { get; set; }

        [Display(Name = "Nome")]
        [Column("Nome")]
        public string Nome { get; set; } 
        
        [Display(Name = "Sobrenome")]
        [Column("Sobrenome")]
        [StringLength(15)]
        public string Sobrenome { get; set; } 
        
        //Pessoa Jurídica
        [Display(Name = "CNPJ")]
        [Column("CNPJ")]
        [StringLength(18)]
        public string CNPJ { get; set; }

        [Display(Name = "Razão Social")]
        [Column("RazSoc")]
        public string RazSoc { get; set; } 
        
        [Display(Name = "Nome Fantasia")]
        [Column("NomeFantasia")]
        public string NomeFantasia { get; set; } 
        
        //Campos Comuns
        [Display(Name = "CEP")]
        [Column("CEP")]
        public string CEP { get; set; } 
        
        [Display(Name = "Logradouro")]
        [Column("Logradouro")]
        public string Logradouro { get; set; } 
        
        [Display(Name = "Numero")]
        [Column("Numero")]
        public int Numero { get; set; } 
        
        [Display(Name = "Completemento")]
        [Column("Completemento")]
        public string Completemento { get; set; } 
        
        [Display(Name = "Bairro")]
        [Column("Bairro")]
        public string Bairro { get; set; } 
        
        [Display(Name = "Cidade")]
        [Column("Cidade")]
        public string Cidade { get; set; } 
        
        [Display(Name = "UF")]
        [Column("UF")]
        public string UF { get; set; } 
    }
}
