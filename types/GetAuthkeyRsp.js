"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAuthkeyRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetAuthkeyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetAuthkeyRsp", [
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "authkey", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "authkey_ver", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "sign_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "auth_appid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "game_biz", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, authkey: "", authkeyVer: 0, signType: 0, authAppid: "", gameBiz: "" };
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
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* string authkey */ 6:
                    message.authkey = reader.string();
                    break;
                case /* uint32 authkey_ver */ 13:
                    message.authkeyVer = reader.uint32();
                    break;
                case /* uint32 sign_type */ 3:
                    message.signType = reader.uint32();
                    break;
                case /* string auth_appid */ 7:
                    message.authAppid = reader.string();
                    break;
                case /* string game_biz */ 1:
                    message.gameBiz = reader.string();
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
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* string authkey = 6; */
        if (message.authkey !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.authkey);
        /* uint32 authkey_ver = 13; */
        if (message.authkeyVer !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.authkeyVer);
        /* uint32 sign_type = 3; */
        if (message.signType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.signType);
        /* string auth_appid = 7; */
        if (message.authAppid !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.authAppid);
        /* string game_biz = 1; */
        if (message.gameBiz !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.gameBiz);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetAuthkeyRsp
 */
exports.GetAuthkeyRsp = new GetAuthkeyRsp$Type();
