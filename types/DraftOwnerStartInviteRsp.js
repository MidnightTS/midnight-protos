"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftOwnerStartInviteRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DraftInviteFailInfo_1 = require("./DraftInviteFailInfo");
// @generated message type with reflection information, may provide speed optimized methods
class DraftOwnerStartInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("DraftOwnerStartInviteRsp", [
            { no: 12, name: "invite_fail_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DraftInviteFailInfo_1.DraftInviteFailInfo },
            { no: 4, name: "draft_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "wrong_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { inviteFailInfoList: [], draftId: 0, retcode: 0, wrongUid: 0 };
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
                case /* repeated DraftInviteFailInfo invite_fail_info_list */ 12:
                    message.inviteFailInfoList.push(DraftInviteFailInfo_1.DraftInviteFailInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 draft_id */ 4:
                    message.draftId = reader.uint32();
                    break;
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 wrong_uid */ 6:
                    message.wrongUid = reader.uint32();
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
        /* repeated DraftInviteFailInfo invite_fail_info_list = 12; */
        for (let i = 0; i < message.inviteFailInfoList.length; i++)
            DraftInviteFailInfo_1.DraftInviteFailInfo.internalBinaryWrite(message.inviteFailInfoList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 draft_id = 4; */
        if (message.draftId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.draftId);
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 wrong_uid = 6; */
        if (message.wrongUid !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.wrongUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DraftOwnerStartInviteRsp
 */
exports.DraftOwnerStartInviteRsp = new DraftOwnerStartInviteRsp$Type();
