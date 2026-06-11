/**
 * Hephzibah Media - Lead Form Handler
 * Detects device type and routes accordingly
 */

document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.lead-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            
            const formData = new FormData(form);
            
            try {
                const response = await fetch('admin/capture-lead.php', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (data.success) {
                    if (data.redirect_url) {
                        window.location.href = data.redirect_url;
                    } else if (data.redirect === 'whatsapp') {
                        const waNumber = '2349077780156';
                        const name = formData.get('full_name') || '';
                        const service = formData.get('requested_service') || '';
                        const message = `Hi Hephzibah Media, I'm interested in your services.\n\nName: ${name}\nService: ${service}`;
                        window.location.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
                    } else {
                        alert(data.message);
                        form.reset();
                    }
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Form submission error:', error);
                alert('Something went wrong. Please try again or contact us directly via WhatsApp.');
            }
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });
});