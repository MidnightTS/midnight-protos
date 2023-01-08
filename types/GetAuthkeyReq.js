"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAuthkeyReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetAuthkeyReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GetAuthkeyReq", [
            { no: 6, name: "sign_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "auth_appid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "authkey_ver", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { signType: 0, authAppid: "", authkeyVer: 0 };
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
                case /* uint32 sign_type */ 6:
                    message.signType = reader.uint32();
                    break;
                case /* string auth_appid */ 13:
                    message.authAppid = reader.string();
                    break;
                case /* uint32 authkey_ver */ 15:
                    message.authkeyVer = reader.uint32();
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
        /* uint32 sign_type = 6; */
        if (message.signType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.signType);
        /* string auth_appid = 13; */
        if (message.authAppid !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.authAppid);
        /* uint32 authkey_ver = 15; */
        if (message.authkeyVer !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.authkeyVer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetAuthkeyReq
 */
exports.GetAuthkeyReq = new GetAuthkeyReq$Type();
