"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpeditionStartRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ExpeditionStartRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ExpeditionStartRsp", [
            { no: 5, name: "Unk3300_AIEJKADFLKG", kind: "scalar", jsonName: "Unk3300AIEJKADFLKG", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "path_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_AFGPGIIGAKA", kind: "scalar", jsonName: "Unk3300AFGPGIIGAKA", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300AIEJKADFLKG: 0, pathId: 0, retcode: 0, avatarIdList: [], unk3300AFGPGIIGAKA: 0 };
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
                case /* uint32 Unk3300_AIEJKADFLKG = 5 [json_name = "Unk3300AIEJKADFLKG"];*/ 5:
                    message.unk3300AIEJKADFLKG = reader.uint32();
                    break;
                case /* uint32 path_id */ 3:
                    message.pathId = reader.uint32();
                    break;
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 avatar_id_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarIdList.push(reader.uint32());
                    else
                        message.avatarIdList.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_AFGPGIIGAKA = 10 [json_name = "Unk3300AFGPGIIGAKA"];*/ 10:
                    message.unk3300AFGPGIIGAKA = reader.uint32();
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
        /* uint32 Unk3300_AIEJKADFLKG = 5 [json_name = "Unk3300AIEJKADFLKG"]; */
        if (message.unk3300AIEJKADFLKG !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.unk3300AIEJKADFLKG);
        /* uint32 path_id = 3; */
        if (message.pathId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.pathId);
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 avatar_id_list = 4; */
        if (message.avatarIdList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarIdList.length; i++)
                writer.uint32(message.avatarIdList[i]);
            writer.join();
        }
        /* uint32 Unk3300_AFGPGIIGAKA = 10 [json_name = "Unk3300AFGPGIIGAKA"]; */
        if (message.unk3300AFGPGIIGAKA !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.unk3300AFGPGIIGAKA);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ExpeditionStartRsp
 */
exports.ExpeditionStartRsp = new ExpeditionStartRsp$Type();
