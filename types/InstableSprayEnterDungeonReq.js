"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstableSprayEnterDungeonReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InstableSprayAvatarInfo_1 = require("./InstableSprayAvatarInfo");
// @generated message type with reflection information, may provide speed optimized methods
class InstableSprayEnterDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("InstableSprayEnterDungeonReq", [
            { no: 5, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InstableSprayAvatarInfo_1.InstableSprayAvatarInfo },
            { no: 1, name: "difficulty", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, avatarInfoList: [], difficulty: 0 };
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
                case /* uint32 stage_id */ 5:
                    message.stageId = reader.uint32();
                    break;
                case /* repeated InstableSprayAvatarInfo avatar_info_list */ 2:
                    message.avatarInfoList.push(InstableSprayAvatarInfo_1.InstableSprayAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 difficulty */ 1:
                    message.difficulty = reader.uint32();
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
        /* uint32 stage_id = 5; */
        if (message.stageId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.stageId);
        /* repeated InstableSprayAvatarInfo avatar_info_list = 2; */
        for (let i = 0; i < message.avatarInfoList.length; i++)
            InstableSprayAvatarInfo_1.InstableSprayAvatarInfo.internalBinaryWrite(message.avatarInfoList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 difficulty = 1; */
        if (message.difficulty !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.difficulty);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InstableSprayEnterDungeonReq
 */
exports.InstableSprayEnterDungeonReq = new InstableSprayEnterDungeonReq$Type();
