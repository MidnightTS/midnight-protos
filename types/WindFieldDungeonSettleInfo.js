"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindFieldDungeonSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WindFieldDungeonFailReason_1 = require("./WindFieldDungeonFailReason");
// @generated message type with reflection information, may provide speed optimized methods
class WindFieldDungeonSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("WindFieldDungeonSettleInfo", [
            { no: 7, name: "Unk3300_FJGFOJBGBKM", kind: "scalar", jsonName: "Unk3300FJGFOJBGBKM", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "fail_reason", kind: "enum", T: () => ["WindFieldDungeonFailReason", WindFieldDungeonFailReason_1.WindFieldDungeonFailReason, "WIND_FIELD_DUNGEON_FAIL_REASON_"] },
            { no: 1, name: "Unk3300_EMCOILGACOC", kind: "scalar", jsonName: "Unk3300EMCOILGACOC", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300FJGFOJBGBKM: [], failReason: 0, unk3300EMCOILGACOC: [] };
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
                case /* repeated uint32 Unk3300_FJGFOJBGBKM = 7 [json_name = "Unk3300FJGFOJBGBKM"];*/ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300FJGFOJBGBKM.push(reader.uint32());
                    else
                        message.unk3300FJGFOJBGBKM.push(reader.uint32());
                    break;
                case /* WindFieldDungeonFailReason fail_reason */ 3:
                    message.failReason = reader.int32();
                    break;
                case /* repeated uint32 Unk3300_EMCOILGACOC = 1 [json_name = "Unk3300EMCOILGACOC"];*/ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300EMCOILGACOC.push(reader.uint32());
                    else
                        message.unk3300EMCOILGACOC.push(reader.uint32());
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
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 Unk3300_FJGFOJBGBKM = 7 [json_name = "Unk3300FJGFOJBGBKM"]; */
        if (message.unk3300FJGFOJBGBKM.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300FJGFOJBGBKM.length; i++)
                writer.uint32(message.unk3300FJGFOJBGBKM[i]);
            writer.join();
        }
        /* WindFieldDungeonFailReason fail_reason = 3; */
        if (message.failReason !== 0)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.failReason);
        /* repeated uint32 Unk3300_EMCOILGACOC = 1 [json_name = "Unk3300EMCOILGACOC"]; */
        if (message.unk3300EMCOILGACOC.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300EMCOILGACOC.length; i++)
                writer.uint32(message.unk3300EMCOILGACOC[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WindFieldDungeonSettleInfo
 */
exports.WindFieldDungeonSettleInfo = new WindFieldDungeonSettleInfo$Type();
