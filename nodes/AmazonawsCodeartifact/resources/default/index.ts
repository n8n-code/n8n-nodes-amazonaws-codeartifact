import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Associate External Connection",
					"value": "Associate External Connection",
					"action": "Associate External Connection",
					"description": "<p>Adds an existing external connection to a repository. One external connection is allowed per repository.</p> <note> <p>A repository can have one or more upstream repositories, or an external connection.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/repository/external-connection#domain&repository&external-connection"
						}
					}
				},
				{
					"name": "Disassociate External Connection",
					"value": "Disassociate External Connection",
					"action": "Disassociate External Connection",
					"description": " Removes an existing external connection from a repository. ",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/repository/external-connection#domain&repository&external-connection"
						}
					}
				},
				{
					"name": "Copy Package Versions",
					"value": "Copy Package Versions",
					"action": "Copy Package Versions",
					"description": "<p> Copies package versions from one repository to another repository in the same domain. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/package/versions/copy#domain&source-repository&destination-repository&format&package"
						}
					}
				},
				{
					"name": "Create Domain",
					"value": "Create Domain",
					"action": "Create Domain",
					"description": "<p> Creates a domain. CodeArtifact <i>domains</i> make it easier to manage multiple repositories across an organization. You can use a domain to apply permissions across many repositories owned by different Amazon Web Services accounts. An asset is stored only once in a domain, even if it's in multiple repositories. </p> <p>Although you can have multiple domains, we recommend a single production domain that contains all published artifacts so that your development teams can find and share packages. You can use a second pre-production domain to test changes to the production domain configuration. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/domain#domain"
						}
					}
				},
				{
					"name": "Delete Domain",
					"value": "Delete Domain",
					"action": "Delete Domain",
					"description": " Deletes a domain. You cannot delete a domain that contains repositories. If you want to delete a domain with repositories, first delete its repositories. ",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/domain#domain"
						}
					}
				},
				{
					"name": "Describe Domain",
					"value": "Describe Domain",
					"action": "Describe Domain",
					"description": " Returns a <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainDescription.html\">DomainDescription</a> object that contains information about the requested domain. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/domain#domain"
						}
					}
				},
				{
					"name": "Create Repository",
					"value": "Create Repository",
					"action": "Create Repository",
					"description": " Creates a repository. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/repository#domain&repository"
						}
					}
				},
				{
					"name": "Delete Repository",
					"value": "Delete Repository",
					"action": "Delete Repository",
					"description": " Deletes a repository. ",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/repository#domain&repository"
						}
					}
				},
				{
					"name": "Describe Repository",
					"value": "Describe Repository",
					"action": "Describe Repository",
					"description": " Returns a <code>RepositoryDescription</code> object that contains detailed information about the requested repository. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/repository#domain&repository"
						}
					}
				},
				{
					"name": "Update Repository",
					"value": "Update Repository",
					"action": "Update Repository",
					"description": " Update the properties of a repository. ",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v1/repository#domain&repository"
						}
					}
				},
				{
					"name": "Delete Domain Permissions Policy",
					"value": "Delete Domain Permissions Policy",
					"action": "Delete Domain Permissions Policy",
					"description": " Deletes the resource policy set on a domain. ",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/domain/permissions/policy#domain"
						}
					}
				},
				{
					"name": "Get Domain Permissions Policy",
					"value": "Get Domain Permissions Policy",
					"action": "Get Domain Permissions Policy",
					"description": "<p> Returns the resource policy attached to the specified domain. </p> <note> <p> The policy is a resource-based policy, not an identity-based policy. For more information, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html\">Identity-based policies and resource-based policies </a> in the <i>IAM User Guide</i>. </p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/domain/permissions/policy#domain"
						}
					}
				},
				{
					"name": "Delete Package",
					"value": "Delete Package",
					"action": "Delete Package",
					"description": "Deletes a package and all associated package versions. A deleted package cannot be restored. To delete one or more package versions, use the <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeletePackageVersions.html\">DeletePackageVersions</a> API.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/package#domain&repository&format&package"
						}
					}
				},
				{
					"name": "Describe Package",
					"value": "Describe Package",
					"action": "Describe Package",
					"description": " Returns a <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html\">PackageDescription</a> object that contains information about the requested package.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/package#domain&repository&format&package"
						}
					}
				},
				{
					"name": "Put Package Origin Configuration",
					"value": "Put Package Origin Configuration",
					"action": "Put Package Origin Configuration",
					"description": "<p>Sets the package origin configuration for a package.</p> <p>The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source. For more information about package origin controls and configuration, see <a href=\"https://docs.aws.amazon.com/codeartifact/latest/ug/package-origin-controls.html\">Editing package origin controls</a> in the <i>CodeArtifact User Guide</i>.</p> <p> <code>PutPackageOriginConfiguration</code> can be called on a package that doesn't yet exist in the repository. When called on a package that does not exist, a package is created in the repository with no versions and the requested restrictions are set on the package. This can be used to preemptively block ingesting or retaining any versions from external connections or upstream repositories, or to block publishing any versions of the package into the repository before connecting any package managers or publishers to the repository.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/package#domain&repository&format&package"
						}
					}
				},
				{
					"name": "Delete Package Versions",
					"value": "Delete Package Versions",
					"action": "Delete Package Versions",
					"description": " Deletes one or more versions of a package. A deleted package version cannot be restored in your repository. If you want to remove a package version from your repository and be able to restore it later, set its status to <code>Archived</code>. Archived packages cannot be downloaded from a repository and don't show up with list package APIs (for example, <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html\">ListPackageVersions</a>), but you can restore them using <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html\">UpdatePackageVersionsStatus</a>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/package/versions/delete#domain&repository&format&package"
						}
					}
				},
				{
					"name": "Delete Repository Permissions Policy",
					"value": "Delete Repository Permissions Policy",
					"action": "Delete Repository Permissions Policy",
					"description": "<p> Deletes the resource policy that is set on a repository. After a resource policy is deleted, the permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate. </p> <important> <p> Use <code>DeleteRepositoryPermissionsPolicy</code> with caution. After a policy is deleted, Amazon Web Services users, roles, and accounts lose permissions to perform the repository actions granted by the deleted policy. </p> </important>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/repository/permissions/policies#domain&repository"
						}
					}
				},
				{
					"name": "Describe Package Version",
					"value": "Describe Package Version",
					"action": "Describe Package Version",
					"description": " Returns a <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html\">PackageVersionDescription</a> object that contains information about the requested package version. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/package/version#domain&repository&format&package&version"
						}
					}
				},
				{
					"name": "Dispose Package Versions",
					"value": "Dispose Package Versions",
					"action": "Dispose Package Versions",
					"description": "<p> Deletes the assets in package versions and sets the package versions' status to <code>Disposed</code>. A disposed package version cannot be restored in your repository because its assets are deleted. </p> <p> To view all disposed package versions in a repository, use <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html\">ListPackageVersions</a> and set the <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html#API_ListPackageVersions_RequestSyntax\">status</a> parameter to <code>Disposed</code>. </p> <p> To view information about a disposed package version, use <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html\">DescribePackageVersion</a>. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/package/versions/dispose#domain&repository&format&package"
						}
					}
				},
				{
					"name": "Get Authorization Token",
					"value": "Get Authorization Token",
					"action": "Get Authorization Token",
					"description": "<p> Generates a temporary authorization token for accessing repositories in the domain. This API requires the <code>codeartifact:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions. For more information about authorization tokens, see <a href=\"https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html\">CodeArtifact authentication and tokens</a>. </p> <note> <p>CodeArtifact authorization tokens are valid for a period of 12 hours when created with the <code>login</code> command. You can call <code>login</code> periodically to refresh the token. When you create an authorization token with the <code>GetAuthorizationToken</code> API, you can set a custom authorization period, up to a maximum of 12 hours, with the <code>durationSeconds</code> parameter.</p> <p>The authorization period begins after <code>login</code> or <code>GetAuthorizationToken</code> is called. If <code>login</code> or <code>GetAuthorizationToken</code> is called while assuming a role, the token lifetime is independent of the maximum session duration of the role. For example, if you call <code>sts assume-role</code> and specify a session duration of 15 minutes, then generate a CodeArtifact authorization token, the token will be valid for the full authorization period even though this is longer than the 15-minute session duration.</p> <p>See <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html\">Using IAM Roles</a> for more information on controlling session duration. </p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/authorization-token#domain"
						}
					}
				},
				{
					"name": "Get Package Version Asset",
					"value": "Get Package Version Asset",
					"action": "Get Package Version Asset",
					"description": " Returns an asset (or file) that is in a package. For example, for a Maven package version, use <code>GetPackageVersionAsset</code> to download a <code>JAR</code> file, a <code>POM</code> file, or any other assets in the package version. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/package/version/asset#domain&repository&format&package&version&asset"
						}
					}
				},
				{
					"name": "Get Package Version Readme",
					"value": "Get Package Version Readme",
					"action": "Get Package Version Readme",
					"description": "<p> Gets the readme file or descriptive text for a package version. </p> <p> The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText. </p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/package/version/readme#domain&repository&format&package&version"
						}
					}
				},
				{
					"name": "Get Repository Endpoint",
					"value": "Get Repository Endpoint",
					"action": "Get Repository Endpoint",
					"description": "<p> Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format: </p> <ul> <li> <p> <code>maven</code> </p> </li> <li> <p> <code>npm</code> </p> </li> <li> <p> <code>nuget</code> </p> </li> <li> <p> <code>pypi</code> </p> </li> </ul>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/repository/endpoint#domain&repository&format"
						}
					}
				},
				{
					"name": "Get Repository Permissions Policy",
					"value": "Get Repository Permissions Policy",
					"action": "Get Repository Permissions Policy",
					"description": " Returns the resource policy that is set on a repository. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/repository/permissions/policy#domain&repository"
						}
					}
				},
				{
					"name": "Put Repository Permissions Policy",
					"value": "Put Repository Permissions Policy",
					"action": "Put Repository Permissions Policy",
					"description": "<p> Sets the resource policy on a repository that specifies permissions to access it. </p> <p> When you call <code>PutRepositoryPermissionsPolicy</code>, the resource policy on the repository is ignored when evaluting permissions. This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being able to update the resource policy. </p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v1/repository/permissions/policy#domain&repository"
						}
					}
				},
				{
					"name": "List Domains",
					"value": "List Domains",
					"action": "List Domains",
					"description": " Returns a list of <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html\">DomainSummary</a> objects for all domains owned by the Amazon Web Services account that makes this call. Each returned <code>DomainSummary</code> object contains information about a domain. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/domains"
						}
					}
				},
				{
					"name": "List Package Version Assets",
					"value": "List Package Version Assets",
					"action": "List Package Version Assets",
					"description": " Returns a list of <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html\">AssetSummary</a> objects for assets in a package version. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/package/version/assets#domain&repository&format&package&version"
						}
					}
				},
				{
					"name": "List Package Version Dependencies",
					"value": "List Package Version Dependencies",
					"action": "List Package Version Dependencies",
					"description": " Returns the direct dependencies for a package version. The dependencies are returned as <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html\">PackageDependency</a> objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package format (for example, the <code>package.json</code> file for npm packages and the <code>pom.xml</code> file for Maven). Any package version dependencies that are not listed in the configuration file are not returned. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/package/version/dependencies#domain&repository&format&package&version"
						}
					}
				},
				{
					"name": "List Package Versions",
					"value": "List Package Versions",
					"action": "List Package Versions",
					"description": " Returns a list of <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html\">PackageVersionSummary</a> objects for package versions in a repository that match the request parameters. Package versions of all statuses will be returned by default when calling <code>list-package-versions</code> with no <code>--status</code> parameter. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/package/versions#domain&repository&format&package"
						}
					}
				},
				{
					"name": "List Packages",
					"value": "List Packages",
					"action": "List Packages",
					"description": " Returns a list of <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html\">PackageSummary</a> objects for packages in a repository that match the request parameters. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/packages#domain&repository"
						}
					}
				},
				{
					"name": "List Repositories",
					"value": "List Repositories",
					"action": "List Repositories",
					"description": " Returns a list of <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html\">RepositorySummary</a> objects. Each <code>RepositorySummary</code> contains information about a repository in the specified Amazon Web Services account and that matches the input parameters. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/repositories"
						}
					}
				},
				{
					"name": "List Repositories In Domain",
					"value": "List Repositories In Domain",
					"action": "List Repositories In Domain",
					"description": " Returns a list of <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html\">RepositorySummary</a> objects. Each <code>RepositorySummary</code> contains information about a repository in the specified domain and that matches the input parameters. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/domain/repositories#domain"
						}
					}
				},
				{
					"name": "List Tags For Resource",
					"value": "List Tags For Resource",
					"action": "List Tags For Resource",
					"description": "Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in CodeArtifact.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/tags#resourceArn"
						}
					}
				},
				{
					"name": "Publish Package Version",
					"value": "Publish Package Version",
					"action": "Publish Package Version",
					"description": "<p>Creates a new package version containing one or more assets (or files).</p> <p>The <code>unfinished</code> flag can be used to keep the package version in the <code>Unfinished</code> state until all of its assets have been uploaded (see <a href=\"https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status.html#package-version-status\">Package version status</a> in the <i>CodeArtifact user guide</i>). To set the package version’s status to <code>Published</code>, omit the <code>unfinished</code> flag when uploading the final asset, or set the status using <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html\">UpdatePackageVersionStatus</a>. Once a package version’s status is set to <code>Published</code>, it cannot change back to <code>Unfinished</code>.</p> <note> <p>Only generic packages can be published using this API. For more information, see <a href=\"https://docs.aws.amazon.com/codeartifact/latest/ug/using-generic.html\">Using generic packages</a> in the <i>CodeArtifact User Guide</i>.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/package/version/publish#domain&repository&format&package&version&asset&x-amz-content-sha256"
						}
					}
				},
				{
					"name": "Put Domain Permissions Policy",
					"value": "Put Domain Permissions Policy",
					"action": "Put Domain Permissions Policy",
					"description": "<p> Sets a resource policy on a domain that specifies permissions to access it. </p> <p> When you call <code>PutDomainPermissionsPolicy</code>, the resource policy on the domain is ignored when evaluting permissions. This ensures that the owner of a domain cannot lock themselves out of the domain, which would prevent them from being able to update the resource policy. </p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v1/domain/permissions/policy"
						}
					}
				},
				{
					"name": "Tag Resource",
					"value": "Tag Resource",
					"action": "Tag Resource",
					"description": "Adds or updates tags for a resource in CodeArtifact.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/tag#resourceArn"
						}
					}
				},
				{
					"name": "Untag Resource",
					"value": "Untag Resource",
					"action": "Untag Resource",
					"description": "Removes tags from a resource in CodeArtifact.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/untag#resourceArn"
						}
					}
				},
				{
					"name": "Update Package Versions Status",
					"value": "Update Package Versions Status",
					"action": "Update Package Versions Status",
					"description": " Updates the status of one or more versions of a package. Using <code>UpdatePackageVersionsStatus</code>, you can update the status of package versions to <code>Archived</code>, <code>Published</code>, or <code>Unlisted</code>. To set the status of a package version to <code>Disposed</code>, use <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisposePackageVersions.html\">DisposePackageVersions</a>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/package/versions/update_status#domain&repository&format&package"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/repository/external-connection#domain&repository&external-connection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate External Connection"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": "The name of the domain that contains the repository.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate External Connection"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate External Connection"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository to which the external connection is added. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate External Connection"
					]
				}
			}
		},
		{
			"displayName": "External Connection",
			"name": "external-connection",
			"required": true,
			"description": "<p> The name of the external connection to add to the repository. The following values are supported: </p> <ul> <li> <p> <code>public:npmjs</code> - for the npm public repository. </p> </li> <li> <p> <code>public:nuget-org</code> - for the NuGet Gallery. </p> </li> <li> <p> <code>public:pypi</code> - for the Python Package Index. </p> </li> <li> <p> <code>public:maven-central</code> - for Maven Central. </p> </li> <li> <p> <code>public:maven-googleandroid</code> - for the Google Android repository. </p> </li> <li> <p> <code>public:maven-gradleplugins</code> - for the Gradle plugins repository. </p> </li> <li> <p> <code>public:maven-commonsware</code> - for the CommonsWare Android repository. </p> </li> <li> <p> <code>public:maven-clojars</code> - for the Clojars repository. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "external-connection",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate External Connection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate External Connection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/repository/external-connection#domain&repository&external-connection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate External Connection"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": "The name of the domain that contains the repository from which to remove the external repository. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate External Connection"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate External Connection"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": "The name of the repository from which the external connection will be removed. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate External Connection"
					]
				}
			}
		},
		{
			"displayName": "External Connection",
			"name": "external-connection",
			"required": true,
			"description": "The name of the external connection to be removed from the repository. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "external-connection",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate External Connection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate External Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/package/versions/copy#domain&source-repository&destination-repository&format&package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the source and destination repositories. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Source Repository",
			"name": "source-repository",
			"required": true,
			"description": " The name of the repository that contains the package versions to be copied. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "source-repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Destination Repository",
			"name": "destination-repository",
			"required": true,
			"description": " The name of the repository into which package versions are copied. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destination-repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": " The format of the package versions to be copied. ",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the package versions to be copied. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. The namespace is required when copying Maven package versions. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": " The name of the package that contains the versions to be copied. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Versions",
			"name": "versions",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "<p> The versions of the package to be copied. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>",
			"routing": {
				"send": {
					"property": "versions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Version Revisions",
			"name": "versionRevisions",
			"type": "json",
			"default": "{}",
			"description": "<p> A list of key-value pairs. The keys are package versions and the values are package version revisions. A <code>CopyPackageVersion</code> operation succeeds if the specified versions in the source repository match the specified package version revision. </p> <note> <p> You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both. </p> </note>",
			"routing": {
				"send": {
					"property": "versionRevisions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Allow Overwrite",
			"name": "allowOverwrite",
			"type": "boolean",
			"default": true,
			"description": " Set to true to overwrite a package version that already exists in the destination repository. If set to false and the package version already exists in the destination repository, the package version is returned in the <code>failedVersions</code> field of the response with an <code>ALREADY_EXISTS</code> error code. ",
			"routing": {
				"send": {
					"property": "allowOverwrite",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Include From Upstream",
			"name": "includeFromUpstream",
			"type": "boolean",
			"default": true,
			"description": " Set to true to copy packages from repositories that are upstream from the source repository to the destination repository. The default setting is false. For more information, see <a href=\"https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html\">Working with upstream repositories</a>. ",
			"routing": {
				"send": {
					"property": "includeFromUpstream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Package Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/domain#domain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain to create. All domain names in an Amazon Web Services Region that are in the same Amazon Web Services account must be unique. The domain name is used as the prefix in DNS hostnames. Do not use sensitive information in a domain name because it is publicly discoverable. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Encryption Key",
			"name": "encryptionKey",
			"type": "string",
			"default": "",
			"description": "<p> The encryption key for the domain. This is used to encrypt content stored in a domain. An encryption key can be a key ID, a key Amazon Resource Name (ARN), a key alias, or a key alias ARN. To specify an <code>encryptionKey</code>, your IAM role must have <code>kms:DescribeKey</code> and <code>kms:CreateGrant</code> permissions on the encryption key that is used. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestSyntax\">DescribeKey</a> in the <i>Key Management Service API Reference</i> and <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html\">Key Management Service API Permissions Reference</a> in the <i>Key Management Service Developer Guide</i>. </p> <important> <p> CodeArtifact supports only symmetric CMKs. Do not associate an asymmetric CMK with your domain. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html\">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>. </p> </important>",
			"routing": {
				"send": {
					"property": "encryptionKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "One or more tag key-value pairs for the domain.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Domain"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/domain#domain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain to delete. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Domain"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/domain#domain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Domain"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " A string that specifies the name of the requested domain. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Domain"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Domain"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/repository#domain&repository",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Repository"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the created repository. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Repository"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Repository"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository to create. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Repository"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": " A description of the created repository. ",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Repository"
					]
				}
			}
		},
		{
			"displayName": "Upstreams",
			"name": "upstreams",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": " A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see <a href=\"https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html\">Working with upstream repositories</a>. ",
			"routing": {
				"send": {
					"property": "upstreams",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Repository"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "One or more tag key-value pairs for the repository.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Repository"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Repository"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/repository#domain&repository",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Repository"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository to delete. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Repository"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Repository"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository to delete. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Repository"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Repository"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/repository#domain&repository",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Repository"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository to describe. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Repository"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Repository"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " A string that specifies the name of the requested repository. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Repository"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Repository"
					]
				}
			}
		},
		{
			"displayName": "PUT /v1/repository#domain&repository",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Repository"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain associated with the repository to update. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Repository"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Repository"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository to update. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Repository"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": " An updated repository description. ",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Repository"
					]
				}
			}
		},
		{
			"displayName": "Upstreams",
			"name": "upstreams",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": " A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see <a href=\"https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html\">Working with upstream repositories</a>. ",
			"routing": {
				"send": {
					"property": "upstreams",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Repository"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Repository"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/domain/permissions/policy#domain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain associated with the resource policy to be deleted. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Policy Revision",
			"name": "policy-revision",
			"description": " The current revision of the resource policy to be deleted. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "policy-revision",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/domain/permissions/policy#domain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain to which the resource policy is attached. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/package#domain&repository&format&package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": "The name of the domain that contains the package to delete.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": "The name of the repository that contains the package to delete.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": "The format of the requested package to delete.",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the package to delete. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. The namespace is required when deleting Maven package versions. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>.</p> </li> <li> <p> Python and NuGet packages do not contain corresponding components, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": "The name of the package to delete.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/package#domain&repository&format&package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": "The name of the domain that contains the repository that contains the package.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": "The name of the repository that contains the requested package. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": "A format that specifies the type of the requested package.",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the requested package. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. The namespace is required when requesting Maven packages. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": "The name of the requested package.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/package#domain&repository&format&package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Package Origin Configuration"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": "The name of the domain that contains the repository that contains the package.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Package Origin Configuration"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Package Origin Configuration"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": "The name of the repository that contains the package.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Package Origin Configuration"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": "A format that specifies the type of the package to be updated.",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Package Origin Configuration"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the package to be updated. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Package Origin Configuration"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": "The name of the package to be updated.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Package Origin Configuration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Restrictions",
			"name": "restrictions",
			"type": "json",
			"default": "{\n  \"upstream\": {}\n}",
			"description": "Details about the origin restrictions set on the package. The package origin restrictions determine how new versions of a package can be added to a specific repository.",
			"routing": {
				"send": {
					"property": "restrictions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Package Origin Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Package Origin Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/package/versions/delete#domain&repository&format&package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the package to delete. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository that contains the package versions to delete. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": " The format of the package versions to delete. ",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the package versions to be deleted. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. The namespace is required when deleting Maven package versions. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": " The name of the package with the versions to delete. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package Versions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Versions",
			"name": "versions",
			"type": "json",
			"default": "[\n  null\n]",
			"description": " An array of strings that specify the versions of the package to delete. ",
			"routing": {
				"send": {
					"property": "versions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Expected Status",
			"name": "expectedStatus",
			"type": "options",
			"default": "Published",
			"description": " The expected status of the package version to delete. ",
			"options": [
				{
					"name": "Published",
					"value": "Published"
				},
				{
					"name": "Unfinished",
					"value": "Unfinished"
				},
				{
					"name": "Unlisted",
					"value": "Unlisted"
				},
				{
					"name": "Archived",
					"value": "Archived"
				},
				{
					"name": "Disposed",
					"value": "Disposed"
				},
				{
					"name": "Deleted",
					"value": "Deleted"
				}
			],
			"routing": {
				"send": {
					"property": "expectedStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Package Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/repository/permissions/policies#domain&repository",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository associated with the resource policy to be deleted. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository that is associated with the resource policy to be deleted ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Policy Revision",
			"name": "policy-revision",
			"description": " The revision of the repository's resource policy to be deleted. This revision is used for optimistic locking, which prevents others from accidentally overwriting your changes to the repository's resource policy. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "policy-revision",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/package/version#domain&repository&format&package&version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package Version"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository that contains the package version. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package Version"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package Version"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository that contains the package version. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package Version"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": " A format that specifies the type of the requested package version. ",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package Version"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the requested package version. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package Version"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": " The name of the requested package version. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package Version"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": " A string that contains the package version (for example, <code>3.5.2</code>). ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package Version"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Package Version"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/package/versions/dispose#domain&repository&format&package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Dispose Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository you want to dispose. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Dispose Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Dispose Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository that contains the package versions you want to dispose. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Dispose Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": " A format that specifies the type of package versions you want to dispose. ",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Dispose Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the package versions to be disposed. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Dispose Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": " The name of the package with the versions you want to dispose. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Dispose Package Versions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Versions",
			"name": "versions",
			"type": "json",
			"default": "[\n  null\n]",
			"description": " The versions of the package you want to dispose. ",
			"routing": {
				"send": {
					"property": "versions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Dispose Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Version Revisions",
			"name": "versionRevisions",
			"type": "json",
			"default": "{}",
			"description": " The revisions of the package versions you want to dispose. ",
			"routing": {
				"send": {
					"property": "versionRevisions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Dispose Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Expected Status",
			"name": "expectedStatus",
			"type": "options",
			"default": "Published",
			"description": " The expected status of the package version to dispose. ",
			"options": [
				{
					"name": "Published",
					"value": "Published"
				},
				{
					"name": "Unfinished",
					"value": "Unfinished"
				},
				{
					"name": "Unlisted",
					"value": "Unlisted"
				},
				{
					"name": "Archived",
					"value": "Archived"
				},
				{
					"name": "Disposed",
					"value": "Disposed"
				},
				{
					"name": "Deleted",
					"value": "Deleted"
				}
			],
			"routing": {
				"send": {
					"property": "expectedStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Dispose Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Dispose Package Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/authorization-token#domain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Authorization Token"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that is in scope for the generated authorization token. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Authorization Token"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Authorization Token"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"description": "The time, in seconds, that the generated authorization token is valid. Valid values are <code>0</code> and any number between <code>900</code> (15 minutes) and <code>43200</code> (12 hours). A value of <code>0</code> will set the expiration of the authorization token to the same expiration of the user's role's temporary credentials.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "duration",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Authorization Token"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Authorization Token"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/package/version/asset#domain&repository&format&package&version&asset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Asset"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository that contains the package version with the requested asset. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Asset"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Asset"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The repository that contains the package version with the requested asset. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Asset"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": " A format that specifies the type of the package version with the requested asset file. ",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Asset"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the package version with the requested asset file. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Asset"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": " The name of the package that contains the requested asset. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Asset"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": " A string that contains the package version (for example, <code>3.5.2</code>). ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Asset"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"required": true,
			"description": " The name of the requested asset. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "asset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Asset"
					]
				}
			}
		},
		{
			"displayName": "Revision",
			"name": "revision",
			"description": " The name of the package version revision that contains the requested asset. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "revision",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Asset"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Asset"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/package/version/readme#domain&repository&format&package&version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Readme"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository that contains the package version with the requested readme file. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Readme"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Readme"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The repository that contains the package with the requested readme file. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Readme"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": " A format that specifies the type of the package version with the requested readme file. ",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Readme"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the package version with the requested readme file. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Readme"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": " The name of the package version that contains the requested readme file. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Readme"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": " A string that contains the package version (for example, <code>3.5.2</code>). ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Readme"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Package Version Readme"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/repository/endpoint#domain&repository&format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Repository Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Repository Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Repository Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Repository Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": " Returns which endpoint of a repository to return. A repository has one endpoint for each package format. ",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Repository Endpoint"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Repository Endpoint"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/repository/permissions/policy#domain&repository",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain containing the repository whose associated resource policy is to be retrieved. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository whose associated resource policy is to be retrieved. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "PUT /v1/repository/permissions/policy#domain&repository",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain containing the repository to set the resource policy on. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository to set the resource policy on. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Policy Revision",
			"name": "policyRevision",
			"type": "string",
			"default": "",
			"description": " Sets the revision of the resource policy that specifies permissions to access the repository. This revision is used for optimistic locking, which prevents others from overwriting your changes to the repository's resource policy. ",
			"routing": {
				"send": {
					"property": "policyRevision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Repository Permissions Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Policy Document",
			"name": "policyDocument",
			"type": "string",
			"default": "",
			"description": " A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided repository. ",
			"routing": {
				"send": {
					"property": "policyDocument",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Repository Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/domains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Domains"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Domains"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Domains"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"type": "number",
			"default": 0,
			"description": " The maximum number of results to return per page. ",
			"routing": {
				"send": {
					"property": "maxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Domains"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"type": "string",
			"default": "",
			"description": " The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ",
			"routing": {
				"send": {
					"property": "nextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Domains"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Domains"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/package/version/assets#domain&repository&format&package&version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository associated with the package version assets. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository that contains the package that contains the requested package version assets. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": " The format of the package that contains the requested package version assets. ",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the package version that contains the requested package version assets. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": " The name of the package that contains the requested package version assets. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": " A string that contains the package version (for example, <code>3.5.2</code>). ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": " The maximum number of results to return per page. ",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": " The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/package/version/dependencies#domain&repository&format&package&version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Dependencies"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository that contains the requested package version dependencies. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Dependencies"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Dependencies"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository that contains the requested package version. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Dependencies"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": " The format of the package with the requested dependencies. ",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Dependencies"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the package version with the requested dependencies. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Dependencies"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": " The name of the package versions' package. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Dependencies"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": " A string that contains the package version (for example, <code>3.5.2</code>). ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Dependencies"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": " The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Dependencies"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Version Dependencies"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/package/versions#domain&repository&format&package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository that contains the requested package versions. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository that contains the requested package versions. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": " The format of the package versions you want to list. ",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the package that contains the requested package versions. The package component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": " The name of the package for which you want to request package versions. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": " A string that filters the requested package versions by status. ",
			"default": "Published",
			"type": "options",
			"options": [
				{
					"name": "Published",
					"value": "Published"
				},
				{
					"name": "Unfinished",
					"value": "Unfinished"
				},
				{
					"name": "Unlisted",
					"value": "Unlisted"
				},
				{
					"name": "Archived",
					"value": "Archived"
				},
				{
					"name": "Disposed",
					"value": "Disposed"
				},
				{
					"name": "Deleted",
					"value": "Deleted"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sortBy",
			"description": " How to sort the requested list of package versions. ",
			"default": "PUBLISHED_TIME",
			"type": "options",
			"options": [
				{
					"name": "PUBLISHED TIME",
					"value": "PUBLISHED_TIME"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sortBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": " The maximum number of results to return per page. ",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": " The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Origin Type",
			"name": "originType",
			"description": "The <code>originType</code> used to filter package versions. Only package versions with the provided <code>originType</code> will be returned.",
			"default": "INTERNAL",
			"type": "options",
			"options": [
				{
					"name": "INTERNAL",
					"value": "INTERNAL"
				},
				{
					"name": "EXTERNAL",
					"value": "EXTERNAL"
				},
				{
					"name": "UNKNOWN",
					"value": "UNKNOWN"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "originType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Package Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/packages#domain&repository",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository that contains the requested packages. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The name of the repository that contains the requested packages. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "The format used to filter requested packages. Only packages from the provided format will be returned.",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace prefix used to filter requested packages. Only packages with a namespace that starts with the provided string value are returned. Note that although this option is called <code>--namespace</code> and not <code>--namespace-prefix</code>, it has prefix-matching behavior.</p> <p>Each package format uses namespace as follows:</p> <ul> <li> <p> The namespace of a Maven package is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet packages do not contain a corresponding component, packages of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Package Prefix",
			"name": "package-prefix",
			"description": " A prefix used to filter requested packages. Only packages with names that start with <code>packagePrefix</code> are returned. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package-prefix",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": " The maximum number of results to return per page. ",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": " The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Publish",
			"name": "publish",
			"description": "The value of the <code>Publish</code> package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html\">PackageOriginRestrictions</a>.",
			"default": "ALLOW",
			"type": "options",
			"options": [
				{
					"name": "ALLOW",
					"value": "ALLOW"
				},
				{
					"name": "BLOCK",
					"value": "BLOCK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "publish",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Upstream",
			"name": "upstream",
			"description": "The value of the <code>Upstream</code> package origin control restriction used to filter requested packages. Only packages with the provided restriction are returned. For more information, see <a href=\"https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageOriginRestrictions.html\">PackageOriginRestrictions</a>.",
			"default": "ALLOW",
			"type": "options",
			"options": [
				{
					"name": "ALLOW",
					"value": "ALLOW"
				},
				{
					"name": "BLOCK",
					"value": "BLOCK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "upstream",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Packages"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/repositories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories"
					]
				}
			}
		},
		{
			"displayName": "Repository Prefix",
			"name": "repository-prefix",
			"description": " A prefix used to filter returned repositories. Only repositories with names that start with <code>repositoryPrefix</code> are returned.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository-prefix",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": " The maximum number of results to return per page. ",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": " The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/domain/repositories#domain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories In Domain"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the returned list of repositories. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories In Domain"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories In Domain"
					]
				}
			}
		},
		{
			"displayName": "Administrator Account",
			"name": "administrator-account",
			"description": " Filter the list of repositories to only include those that are managed by the Amazon Web Services account ID. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "administrator-account",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories In Domain"
					]
				}
			}
		},
		{
			"displayName": "Repository Prefix",
			"name": "repository-prefix",
			"description": " A prefix used to filter returned repositories. Only repositories with names that start with <code>repositoryPrefix</code> are returned. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository-prefix",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories In Domain"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "max-results",
			"description": " The maximum number of results to return per page. ",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "max-results",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories In Domain"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "next-token",
			"description": " The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next-token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories In Domain"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories In Domain"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories In Domain"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Repositories In Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/tags#resourceArn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "The Amazon Resource Name (ARN) of the resource to get tags for.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceArn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/package/version/publish#domain&repository&format&package&version&asset&x-amz-content-sha256",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": "The name of the domain that contains the repository that contains the package version to publish.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": "The 12-digit account number of the AWS account that owns the domain. It does not include dashes or spaces.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": "The name of the repository that the package version will be published to.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": "A format that specifies the type of the package version with the requested asset file.",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "The namespace of the package version to publish.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": "The name of the package version to publish.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": "The package version to publish (for example, <code>3.5.2</code>).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "version",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "Asset",
			"name": "asset",
			"required": true,
			"description": "The name of the asset to publish. Asset names can include Unicode letters and numbers, and the following special characters: <code>~ ! @ ^ &amp; ( ) - ` _ + [ ] { } ; , . `</code> ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "asset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "X Amz Content Sha 256",
			"name": "x-amz-content-sha256",
			"required": true,
			"description": "<p>The SHA256 hash of the <code>assetContent</code> to publish. This value must be calculated by the caller and provided with the request (see <a href=\"https://docs.aws.amazon.com/codeartifact/latest/ug/using-generic.html#publishing-generic-packages\">Publishing a generic package</a> in the <i>CodeArtifact User Guide</i>).</p> <p>This value is used as an integrity check to verify that the <code>assetContent</code> has not changed after it was originally sent.</p>",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-amz-content-sha256": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "Unfinished",
			"name": "unfinished",
			"description": "<p>Specifies whether the package version should remain in the <code>unfinished</code> state. If omitted, the package version status will be set to <code>Published</code> (see <a href=\"https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status\">Package version status</a> in the <i>CodeArtifact User Guide</i>).</p> <p>Valid values: <code>unfinished</code> </p>",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "unfinished",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Asset Content",
			"name": "assetContent",
			"type": "string",
			"default": "",
			"description": "The content of the asset to publish.",
			"routing": {
				"send": {
					"property": "assetContent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Package Version"
					]
				}
			}
		},
		{
			"displayName": "PUT /v1/domain/permissions/policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Domain Permissions Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Domain",
			"name": "domain",
			"type": "string",
			"default": "",
			"description": " The name of the domain on which to set the resource policy. ",
			"routing": {
				"send": {
					"property": "domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domainOwner",
			"type": "string",
			"default": "",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"routing": {
				"send": {
					"property": "domainOwner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Policy Revision",
			"name": "policyRevision",
			"type": "string",
			"default": "",
			"description": " The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy. ",
			"routing": {
				"send": {
					"property": "policyRevision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Domain Permissions Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Policy Document",
			"name": "policyDocument",
			"type": "string",
			"default": "",
			"description": " A valid displayable JSON Aspen policy string to be set as the access control resource policy on the provided domain. ",
			"routing": {
				"send": {
					"property": "policyDocument",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Domain Permissions Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/tag#resourceArn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceArn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"value\": {}\n  }\n]",
			"description": "The tags you want to modify or add to the resource.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/untag#resourceArn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "The Amazon Resource Name (ARN) of the resource that you want to remove tags from.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceArn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag Keys",
			"name": "tagKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The tag key for each tag that you want to remove from the resource.",
			"routing": {
				"send": {
					"property": "tagKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/package/versions/update_status#domain&repository&format&package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"required": true,
			"description": " The name of the domain that contains the repository that contains the package versions with a status to be updated. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
		{
			"displayName": "Domain Owner",
			"name": "domain-owner",
			"description": " The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "domain-owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
		{
			"displayName": "Repository",
			"name": "repository",
			"required": true,
			"description": " The repository that contains the package versions with the status you want to update. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "repository",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"required": true,
			"description": " A format that specifies the type of the package with the statuses to update. ",
			"default": "npm",
			"type": "options",
			"options": [
				{
					"name": "Npm",
					"value": "npm"
				},
				{
					"name": "Pypi",
					"value": "pypi"
				},
				{
					"name": "Maven",
					"value": "maven"
				},
				{
					"name": "Nuget",
					"value": "nuget"
				},
				{
					"name": "Generic",
					"value": "generic"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
		{
			"displayName": "Namespace",
			"name": "namespace",
			"description": "<p>The namespace of the package version to be updated. The package version component that specifies its namespace depends on its type. For example:</p> <ul> <li> <p> The namespace of a Maven package version is its <code>groupId</code>. </p> </li> <li> <p> The namespace of an npm package version is its <code>scope</code>. </p> </li> <li> <p> Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. </p> </li> <li> <p> The namespace of a generic package is its <code>namespace</code>. </p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "namespace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"required": true,
			"description": " The name of the package with the version statuses to update. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Versions",
			"name": "versions",
			"type": "json",
			"default": "[\n  null\n]",
			"description": " An array of strings that specify the versions of the package with the statuses to update. ",
			"routing": {
				"send": {
					"property": "versions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
		{
			"displayName": "Version Revisions",
			"name": "versionRevisions",
			"type": "json",
			"default": "{}",
			"description": " A map of package versions and package version revisions. The map <code>key</code> is the package version (for example, <code>3.5.2</code>), and the map <code>value</code> is the package version revision. ",
			"routing": {
				"send": {
					"property": "versionRevisions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
		{
			"displayName": "Expected Status",
			"name": "expectedStatus",
			"type": "options",
			"default": "Published",
			"description": " The package version’s expected status before it is updated. If <code>expectedStatus</code> is provided, the package version's status is updated only if its status at the time <code>UpdatePackageVersionsStatus</code> is called matches <code>expectedStatus</code>. ",
			"options": [
				{
					"name": "Published",
					"value": "Published"
				},
				{
					"name": "Unfinished",
					"value": "Unfinished"
				},
				{
					"name": "Unlisted",
					"value": "Unlisted"
				},
				{
					"name": "Archived",
					"value": "Archived"
				},
				{
					"name": "Disposed",
					"value": "Disposed"
				},
				{
					"name": "Deleted",
					"value": "Deleted"
				}
			],
			"routing": {
				"send": {
					"property": "expectedStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Target Status",
			"name": "targetStatus",
			"type": "options",
			"default": "Published",
			"description": " The status you want to change the package version status to. ",
			"options": [
				{
					"name": "Published",
					"value": "Published"
				},
				{
					"name": "Unfinished",
					"value": "Unfinished"
				},
				{
					"name": "Unlisted",
					"value": "Unlisted"
				},
				{
					"name": "Archived",
					"value": "Archived"
				},
				{
					"name": "Disposed",
					"value": "Disposed"
				},
				{
					"name": "Deleted",
					"value": "Deleted"
				}
			],
			"routing": {
				"send": {
					"property": "targetStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Package Versions Status"
					]
				}
			}
		},
];
