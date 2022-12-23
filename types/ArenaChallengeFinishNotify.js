"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArenaChallengeFinishNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ArenaChallengeChildChallengeInfo_1 = require("./ArenaChallengeChildChallengeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ArenaChallengeFinishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ArenaChallengeFinishNotify", [
            { no: 8, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "Unk3300_FDFNFLAKONG", kind: "scalar", jsonName: "Unk3300FDFNFLAKONG", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "child_challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ArenaChallengeChildChallengeInfo_1.ArenaChallengeChildChallengeInfo },
            { no: 10, name: "Unk3300_DBHAGHMMLAI", kind: "scalar", jsonName: "Unk3300DBHAGHMMLAI", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isSuccess: false, unk3300FDFNFLAKONG: 0, childChallengeList: [], unk3300DBHAGHMMLAI: 0 };
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
                case /* bool is_success */ 8:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 Unk3300_FDFNFLAKONG = 3 [json_name = "Unk3300FDFNFLAKONG"];*/ 3:
                    message.unk3300FDFNFLAKONG = reader.uint32();
                    break;
                case /* repeated ArenaChallengeChildChallengeInfo child_challenge_list */ 14:
                    message.childChallengeList.push(ArenaChallengeChildChallengeInfo_1.ArenaChallengeChildChallengeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_DBHAGHMMLAI = 10 [json_name = "Unk3300DBHAGHMMLAI"];*/ 10:
                    message.unk3300DBHAGHMMLAI = reader.uint32();
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
        /* bool is_success = 8; */
        if (message.isSuccess !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 Unk3300_FDFNFLAKONG = 3 [json_name = "Unk3300FDFNFLAKONG"]; */
        if (message.unk3300FDFNFLAKONG !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300FDFNFLAKONG);
        /* repeated ArenaChallengeChildChallengeInfo child_challenge_list = 14; */
        for (let i = 0; i < message.childChallengeList.length; i++)
            ArenaChallengeChildChallengeInfo_1.ArenaChallengeChildChallengeInfo.internalBinaryWrite(message.childChallengeList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_DBHAGHMMLAI = 10 [json_name = "Unk3300DBHAGHMMLAI"]; */
        if (message.unk3300DBHAGHMMLAI !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300DBHAGHMMLAI);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ArenaChallengeFinishNotify
 */
exports.ArenaChallengeFinishNotify = new ArenaChallengeFinishNotify$Type();
