<script lang="ts" setup>
definePageMeta({
  title: 'Dashboard'
})
</script>

<template>
  <nord-card padding="none" class="mb-m">
    <h2 slot="header">Payouts</h2>
    <nord-table>
      <table>
        <thead>
          <tr>
            <th class="n-table-align-right">Amount</th>
            <th>Status</th>
            <th>Description</th>
            <th>Method</th>
            <th class="n-table-align-right">Date</th>
            <th class="n-table-align-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">20.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">29,90&thinsp;€</td>
            <td class="current-status"><nord-badge type="warning">Warning</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">20.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">50,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">19.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">49,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">17.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">1023,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="danger">Alert</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">12.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">32,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">10.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">40,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="warning">Warning</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">9.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">28,52&thinsp;€</td>
            <td class="current-status"><nord-badge type="warning">Warning</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">4.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">4.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">220,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">3.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">50,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">1.3.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">30.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">30.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">30.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">29,90&thinsp;€</td>
            <td class="current-status"><nord-badge type="warning">Warning</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">28.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">50,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">28.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">49,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">26.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">1023,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="danger">Alert</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">24.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">32,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">23.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">40,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="warning">Warning</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">22.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">28,52&thinsp;€</td>
            <td class="current-status"><nord-badge type="warning">Warning</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">21.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">350,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">20.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
          <tr>
            <td class="n-table-align-right">220,00&thinsp;€</td>
            <td class="current-status"><nord-badge type="success">Success</nord-badge></td>
            <td class="n-table-ellipsis">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor massa sociis
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus.
            </td>
            <td class="n-caption">Card</td>
            <td class="n-caption n-table-align-right">18.2.2021</td>
            <td>
              <div class="n-table-actions">
                <nord-dropdown position="block-end" align="end">
                  <nord-button slot="toggle" aria-describedby="edit" size="s">
                    <nord-icon
                      name="interface-menu-small"
                      color="var(--n-color-icon)"
                      label="Open menu"
                      size="s"
                      style="margin-top: 1px"
                    ></nord-icon>
                  </nord-button>
                  <nord-dropdown-group>
                    <nord-dropdown-item href="#">View payment details</nord-dropdown-item>
                    <nord-dropdown-item>Open in new tab</nord-dropdown-item>
                    <nord-dropdown-item>Copy link</nord-dropdown-item>
                  </nord-dropdown-group>
                  <nord-dropdown-group>
                    <nord-dropdown-item> Refund payment </nord-dropdown-item>
                  </nord-dropdown-group>
                </nord-dropdown>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </nord-table>
    <nord-tooltip id="edit" position="block-end">Edit this row</nord-tooltip>
  </nord-card>
</template>