"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodexTypeData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CodexType_1 = require("./CodexType");
// @generated message type with reflection information, may provide speed optimized methods
class CodexTypeData$Type extends runtime_5.MessageType {
    constructor() {
        super("CodexTypeData", [
            { no: 13, name: "have_viewed_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "codex_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "weapon_max_promote_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 14, name: "type", kind: "enum", T: () => ["CodexType", CodexType_1.CodexType, "CODEX_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { haveViewedList: [], codexIdList: [], weaponMaxPromoteLevelMap: {}, type: 0 };
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
                case /* repeated bool have_viewed_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.haveViewedList.push(reader.bool());
                    else
                        message.haveViewedList.push(reader.bool());
                    break;
                case /* repeated uint32 codex_id_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.codexIdList.push(reader.uint32());
                    else
                        message.codexIdList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> weapon_max_promote_level_map */ 12:
                    this.binaryReadMap12(message.weaponMaxPromoteLevelMap, reader, options);
                    break;
                case /* CodexType type */ 14:
                    message.type = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap12(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field CodexTypeData.weapon_max_promote_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated bool have_viewed_list = 13; */
        if (message.haveViewedList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.haveViewedList.length; i++)
                writer.bool(message.haveViewedList[i]);
            writer.join();
        }
        /* repeated uint32 codex_id_list = 9; */
        if (message.codexIdList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.codexIdList.length; i++)
                writer.uint32(message.codexIdList[i]);
            writer.join();
        }
        /* map<uint32, uint32> weapon_max_promote_level_map = 12; */
        for (let k of Object.keys(message.weaponMaxPromoteLevelMap))
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.weaponMaxPromoteLevelMap[k]).join();
        /* CodexType type = 14; */
        if (message.type !== 0)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CodexTypeData
 */
exports.CodexTypeData = new CodexTypeData$Type();
