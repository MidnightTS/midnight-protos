"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionSearch = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RegionSearchState_1 = require("./RegionSearchState");
// @generated message type with reflection information, may provide speed optimized methods
class RegionSearch$Type extends runtime_5.MessageType {
    constructor() {
        super("RegionSearch", [
            { no: 2, name: "state", kind: "enum", T: () => ["RegionSearchState", RegionSearchState_1.RegionSearchState, "REGION_SEARCH_STATE_"] },
            { no: 6, name: "is_entered", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "region_search_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { state: 0, isEntered: false, progress: 0, regionSearchId: 0 };
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
                case /* RegionSearchState state */ 2:
                    message.state = reader.int32();
                    break;
                case /* bool is_entered */ 6:
                    message.isEntered = reader.bool();
                    break;
                case /* uint32 progress */ 5:
                    message.progress = reader.uint32();
                    break;
                case /* uint32 region_search_id */ 1:
                    message.regionSearchId = reader.uint32();
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
        /* RegionSearchState state = 2; */
        if (message.state !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.state);
        /* bool is_entered = 6; */
        if (message.isEntered !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isEntered);
        /* uint32 progress = 5; */
        if (message.progress !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.progress);
        /* uint32 region_search_id = 1; */
        if (message.regionSearchId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.regionSearchId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RegionSearch
 */
exports.RegionSearch = new RegionSearch$Type();
