"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionSearchChangeRegionNotify = exports.RegionSearchChangeRegionNotify_RegionEvent = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum RegionSearchChangeRegionNotify.RegionEvent
 */
var RegionSearchChangeRegionNotify_RegionEvent;
(function (RegionSearchChangeRegionNotify_RegionEvent) {
    /**
     * @generated from protobuf enum value: REGION_EVENT_NONE = 0;
     */
    RegionSearchChangeRegionNotify_RegionEvent[RegionSearchChangeRegionNotify_RegionEvent["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: REGION_EVENT_ENTER = 1;
     */
    RegionSearchChangeRegionNotify_RegionEvent[RegionSearchChangeRegionNotify_RegionEvent["ENTER"] = 1] = "ENTER";
    /**
     * @generated from protobuf enum value: REGION_EVENT_LEAVE = 2;
     */
    RegionSearchChangeRegionNotify_RegionEvent[RegionSearchChangeRegionNotify_RegionEvent["LEAVE"] = 2] = "LEAVE";
})(RegionSearchChangeRegionNotify_RegionEvent = exports.RegionSearchChangeRegionNotify_RegionEvent || (exports.RegionSearchChangeRegionNotify_RegionEvent = {}));
// @generated message type with reflection information, may provide speed optimized methods
class RegionSearchChangeRegionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("RegionSearchChangeRegionNotify", [
            { no: 6, name: "region_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "event", kind: "enum", T: () => ["RegionSearchChangeRegionNotify.RegionEvent", RegionSearchChangeRegionNotify_RegionEvent, "REGION_EVENT_"] }
        ]);
    }
    create(value) {
        const message = { regionId: 0, event: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 region_id */ 6:
                    message.regionId = reader.uint32();
                    break;
                case /* RegionSearchChangeRegionNotify.RegionEvent event */ 11:
                    message.event = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 region_id = 6; */
        if (message.regionId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.regionId);
        /* RegionSearchChangeRegionNotify.RegionEvent event = 11; */
        if (message.event !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.event);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RegionSearchChangeRegionNotify
 */
exports.RegionSearchChangeRegionNotify = new RegionSearchChangeRegionNotify$Type();
