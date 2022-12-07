"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReunionBriefInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ReunionBriefInfo_1 = require("./ReunionBriefInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ReunionBriefInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ReunionBriefInfoRsp", [
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "reunion_brief_info", kind: "message", T: () => ReunionBriefInfo_1.ReunionBriefInfo },
            { no: 15, name: "is_activate", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, isActivate: false };
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
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* ReunionBriefInfo reunion_brief_info */ 13:
                    message.reunionBriefInfo = ReunionBriefInfo_1.ReunionBriefInfo.internalBinaryRead(reader, reader.uint32(), options, message.reunionBriefInfo);
                    break;
                case /* bool is_activate */ 15:
                    message.isActivate = reader.bool();
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
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        /* ReunionBriefInfo reunion_brief_info = 13; */
        if (message.reunionBriefInfo)
            ReunionBriefInfo_1.ReunionBriefInfo.internalBinaryWrite(message.reunionBriefInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_activate = 15; */
        if (message.isActivate !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isActivate);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReunionBriefInfoRsp
 */
exports.ReunionBriefInfoRsp = new ReunionBriefInfoRsp$Type();
