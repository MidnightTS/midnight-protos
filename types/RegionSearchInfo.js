"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionSearchInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RegionSearch_1 = require("./RegionSearch");
// @generated message type with reflection information, may provide speed optimized methods
class RegionSearchInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RegionSearchInfo", [
            { no: 2, name: "is_entered", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "region_search_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RegionSearch_1.RegionSearch },
            { no: 9, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isEntered: false, regionSearchList: [], id: 0 };
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
                case /* bool is_entered */ 2:
                    message.isEntered = reader.bool();
                    break;
                case /* repeated RegionSearch region_search_list */ 7:
                    message.regionSearchList.push(RegionSearch_1.RegionSearch.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 id */ 9:
                    message.id = reader.uint32();
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
        /* bool is_entered = 2; */
        if (message.isEntered !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isEntered);
        /* repeated RegionSearch region_search_list = 7; */
        for (let i = 0; i < message.regionSearchList.length; i++)
            RegionSearch_1.RegionSearch.internalBinaryWrite(message.regionSearchList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 id = 9; */
        if (message.id !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RegionSearchInfo
 */
exports.RegionSearchInfo = new RegionSearchInfo$Type();
