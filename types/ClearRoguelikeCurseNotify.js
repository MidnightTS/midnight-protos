"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearRoguelikeCurseNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ClearRoguelikeCurseNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ClearRoguelikeCurseNotify", [
            { no: 11, name: "is_clear_all", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "clear_curse_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_curse_all_clear", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isClearAll: false, clearCurseMap: {}, cardId: 0, isCurseAllClear: false };
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
                case /* bool is_clear_all */ 11:
                    message.isClearAll = reader.bool();
                    break;
                case /* map<uint32, uint32> clear_curse_map */ 5:
                    this.binaryReadMap5(message.clearCurseMap, reader, options);
                    break;
                case /* uint32 card_id */ 9:
                    message.cardId = reader.uint32();
                    break;
                case /* bool is_curse_all_clear */ 4:
                    message.isCurseAllClear = reader.bool();
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
    binaryReadMap5(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ClearRoguelikeCurseNotify.clear_curse_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_clear_all = 11; */
        if (message.isClearAll !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isClearAll);
        /* map<uint32, uint32> clear_curse_map = 5; */
        for (let k of Object.keys(message.clearCurseMap))
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.clearCurseMap[k]).join();
        /* uint32 card_id = 9; */
        if (message.cardId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.cardId);
        /* bool is_curse_all_clear = 4; */
        if (message.isCurseAllClear !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isCurseAllClear);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClearRoguelikeCurseNotify
 */
exports.ClearRoguelikeCurseNotify = new ClearRoguelikeCurseNotify$Type();
