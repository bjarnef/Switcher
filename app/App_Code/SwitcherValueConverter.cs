using Umbraco.Core.Models.PublishedContent;
using Umbraco.Core.PropertyEditors;

namespace Switcher
{
	[PropertyValueType(typeof(bool))]
	[PropertyValueCache(PropertyCacheValue.All, PropertyCacheLevel.ContentCache)]
	public class SwitcherValueConverter : IPropertyValueConverter
	{
		public object ConvertDataToSource(PublishedPropertyType propertyType, object source, bool preview)
		{
			var result = source.ToString() == "1";
			return result;
		}

		public object ConvertSourceToObject(PublishedPropertyType propertyType, object source, bool preview)
		{
			var result = source.ToString() == "1";
			return result;
		}

		public object ConvertSourceToXPath(PublishedPropertyType propertyType, object source, bool preview)
		{
			return source.ToString();
		}

		public bool IsConverter(PublishedPropertyType propertyType)
		{
			return propertyType.PropertyEditorAlias == "Our.Umbraco.Switcher";
		}
	}
}
