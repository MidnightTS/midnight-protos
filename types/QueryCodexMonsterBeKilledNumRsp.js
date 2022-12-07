"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCodexMonsterBeKilledNumRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class QueryCodexMonsterBeKilledNumRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("QueryCodexMonsterBeKilledNumRsp", [
            { no: 11, name: "Unk3300_ALELNLIODAO", kind: "scalar", jsonName: "Unk3300ALELNLIODAO", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_INHAGEELNNC", kind: "scalar", jsonName: "Unk3300INHAGEELNNC", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "codex_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300ALELNLIODAO: [], unk3300INHAGEELNNC: [], retcode: 0, codexIdList: [] };
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
                case /* repeated uint32 Unk3300_ALELNLIODAO = 11 [json_name = "Unk3300ALELNLIODAO"];*/ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300ALELNLIODAO.push(reader.uint32());
                    else
                        message.unk3300ALELNLIODAO.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_INHAGEELNNC = 5 [json_name = "Unk3300INHAGEELNNC"];*/ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300INHAGEELNNC.push(reader.uint32());
                    else
                        message.unk3300INHAGEELNNC.push(reader.uint32());
                    break;
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 codex_id_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.codexIdList.push(reader.uint32());
                    else
                        message.codexIdList.push(reader.uint32());
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
        /* repeated uint32 Unk3300_ALELNLIODAO = 11 [json_name = "Unk3300ALELNLIODAO"]; */
        if (message.unk3300ALELNLIODAO.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300ALELNLIODAO.length; i++)
                writer.uint32(message.unk3300ALELNLIODAO[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_INHAGEELNNC = 5 [json_name = "Unk3300INHAGEELNNC"]; */
        if (message.unk3300INHAGEELNNC.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300INHAGEELNNC.length; i++)
                writer.uint32(message.unk3300INHAGEELNNC[i]);
            writer.join();
        }
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 codex_id_list = 10; */
        if (message.codexIdList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.codexIdList.length; i++)
                writer.uint32(message.codexIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QueryCodexMonsterBeKilledNumRsp
 */
exports.QueryCodexMonsterBeKilledNumRsp = new QueryCodexMonsterBeKilledNumRsp$Type();
