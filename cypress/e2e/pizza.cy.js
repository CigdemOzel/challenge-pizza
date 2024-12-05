describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
  });
});

describe("Order Form Test", () => {
  it("İsim input alanına metin girer", () => {
    cy.visit("http://localhost:5173/"); // Uygulamanın doğru adresini kontrol et
    cy.get('input[placeholder="Adınızı giriniz"]', { timeout: 10000 }) // 10 saniye bekleme
      .should("be.visible") // Görünür olmalı
      .type("Çiğdem Özel") // Metin gir
      .should("have.value", "Çiğdem Özel"); // Girilen değeri doğrula
  });
});

describe("Malzeme Seçimi Testi", () => {
  it("Birden fazla malzeme seçilebilir ve sınırlar doğrulanır", () => {
    cy.visit("/"); // Formun bulunduğu sayfayı ziyaret edin

    // İlk dört malzemeyi seç
    cy.get('input[type="checkbox"]').each((checkbox, index) => {
      if (index < 4) {
        cy.wrap(checkbox).check().should("be.checked"); // Seçimi doğrula
      }
    });

    // 11. malzemeyi seçmeye çalış ve seçilemeyeceğini doğrula
    cy.get('input[type="checkbox"]').eq(10).check({ force: true });
    cy.get('input[type="checkbox"]').eq(10).should("not.be.checked");
  });
});

describe("Form Gönderme Testi", () => {
  it("Form başarıyla doldurulur ve gönderilir", () => {
    cy.visit("/"); // Formun bulunduğu sayfayı ziyaret edin

    // Zorunlu alanları doldur
    cy.get('input[placeholder="Adınızı giriniz"]').type("Çiğdem Özel");
    cy.get('input[type="radio"]').first().check(); // İlk boyut seçeneğini seç
    cy.get('select[name="crust"]').select("Orta"); // Dropdown'dan bir seçenek seç
    cy.get('input[type="checkbox"]').each((checkbox, index) => {
      if (index < 4) {
        cy.wrap(checkbox).check(); // İlk dört malzemeyi seç
      }
    });

    // Formu gönder
    cy.get(".siparis-butonu").click();

    // Yönlendirmeyi kontrol et
    cy.url().should("include", "/order-confirmation");
    cy.contains("Siparişiniz başarıyla alınmıştır").should("be.visible");
  });
});
